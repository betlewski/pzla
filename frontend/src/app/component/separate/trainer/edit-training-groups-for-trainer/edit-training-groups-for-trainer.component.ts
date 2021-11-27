import {Component, OnInit} from '@angular/core';
import {Athlete} from "../../../../model/athlete.model";
import {AthleteType} from "../../../../utils/athlete-type";
import {MedicalStatus} from "../../../../utils/medical-status";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../../service/auth/auth.service";
import {AthleteService} from "../../../../service/rest/athlete/athlete.service";
import {TrainingGroupService} from "../../../../service/rest/training-group/training-group.service";
import {TrainingGroup} from "../../../../model/training-group.model";
import {GroupType} from "../../../../utils/group-type";
import {ClubService} from "../../../../service/rest/club/club.service";

@Component({
  selector: 'app-edit-training-groups-for-trainer',
  templateUrl: './edit-training-groups-for-trainer.component.html',
  styleUrls: ['./edit-training-groups-for-trainer.component.css']
})
export class EditTrainingGroupsForTrainerComponent implements OnInit {

  name: string = "";
  groupType: string | null = null;
  headTrainer: string | null = null;
  assistantTrainer: string | null = null;
  athletes: Athlete[] | null = [];

  allFreeAthletes: Athlete[] = [];
  chosenAthlete: Athlete | null = null;
  athleteUtils = AthleteType;
  medicalUtils = MedicalStatus;
  clubEmail: string = "";

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private athleteService: AthleteService,
              private clubService: ClubService,
              private trainingGroupService: TrainingGroupService) {
    // @ts-ignore
    this.name = this.route.snapshot.paramMap.get('name');
    this.clubService.findByMemberEmail(this.authService.getUserEmail())
      .subscribe(club => {
        this.clubEmail = club.email == null ? "" : club.email;
        this.loadFreeAthletes();
      });
  }

  ngOnInit(): void {
    this.loadTrainingGroupData();
  }

  private loadTrainingGroupData(): void {
    this.trainingGroupService.findByName(this.name)
      .subscribe(data => this.fillFormDataFromGroup(data));
  }

  private loadFreeAthletes(): void {
    this.athleteService.findFreeByClub(this.clubEmail)
      .subscribe(data => this.allFreeAthletes = data);
  }

  private fillFormDataFromGroup(group: TrainingGroup) {
    if (group != null) {
      // @ts-ignore
      this.groupType = GroupType.translate(group.groupType);
      this.headTrainer = group.headTrainer?.fullName + " (" + group.headTrainer?.email + ")";
      this.assistantTrainer = group.assistantTrainer?.fullName + " (" + group.assistantTrainer?.email + ")"; // @ts-ignore
      this.athletes = group.athletes.sort((a, b) => a.email?.localeCompare(b.email));
    }
  }

  public delete(athlete: Athlete): void {
    this.trainingGroupService.edit(this.name, false, athlete.email)
      .subscribe(() => {
        this.loadTrainingGroupData();
        this.loadFreeAthletes();
      });
  }

  public add(): void { // @ts-ignore
    if (this.chosenAthlete != null && this.chosenAthlete != "") {
      this.trainingGroupService.edit(this.name, true, this.chosenAthlete.email)
        .subscribe(() => {
          this.loadTrainingGroupData();
          this.loadFreeAthletes();
        });
    }
  }

}
