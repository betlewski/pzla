import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../../service/auth/auth.service";
import {TextConstants} from "../../../../utils/text-constants";
import {Utils} from "../../../../utils/utils";
import {GroupType} from "../../../../utils/group-type";
import {Trainer} from "../../../../model/trainer.model";
import {TrainingGroupService} from "../../../../service/rest/training-group/training-group.service";
import {TrainingGroup} from "../../../../model/training-group.model";
import {TrainerService} from "../../../../service/rest/trainer/trainer.service";

@Component({
  selector: 'app-new-training-group',
  templateUrl: './new-training-group.component.html',
  styleUrls: ['./new-training-group.component.css']
})
export class NewTrainingGroupComponent implements OnInit {

  name: string | null = null;
  groupType: string | null = null;
  headTrainer: Trainer | null = null;
  assistantTrainer: Trainer | null = null;

  allTrainers: Trainer[] = [];
  headTrainers: Trainer[] = [];
  assistantTrainers: Trainer[] = [];
  groupTypes: GroupType[] = GroupType.values();
  groupUtils = GroupType;

  feedback: string = "";
  clubEmail: string = "";

  constructor(private router: Router,
              private authService: AuthService,
              private trainerService: TrainerService,
              private trainingGroupService: TrainingGroupService) {
    this.clubEmail = this.authService.getUserEmail();
    this.trainerService.findAllByClub(this.clubEmail)
      .subscribe(data => {
        this.allTrainers = data;
        this.headTrainers = this.allTrainers;
        this.assistantTrainers = this.allTrainers;
      });
  }

  ngOnInit(): void {
  }

  public add() {
    if (this.checkIfDataCorrect()) { // @ts-ignore
      const newTrainingGroup = TrainingGroup.register(this.name, GroupType[this.groupType]); // @ts-ignore
      this.trainingGroupService.add(newTrainingGroup, this.clubEmail, this.headTrainer?.email, this.assistantTrainer?.email)
        .subscribe(() => {
            this.router.navigate(["/home/club/training-groups"]).then();
          },
          error => {
            if (error.status == 409) {
              this.feedback = TextConstants.REGISTRATION_DUPLICATED_NAME;
            } else {
              this.feedback = TextConstants.REGISTRATION_INVALID_DATA;
            }
          });
    }
  }

  private checkIfDataCorrect(): boolean {
    if (!Utils.checkStringIfNotEmpty(this.name) || this.groupType == null || // @ts-ignore
      this.headTrainer == null || this.headTrainer == "" || this.assistantTrainer == null || this.assistantTrainer == "") {
      this.feedback = TextConstants.REGISTRATION_INCOMPLETE_DATA;
      return false;
    }
    return true;
  }

  public headChanged(trainer: Trainer): void {
    this.assistantTrainers = this.allTrainers
      .filter(value => value != trainer);
  }

  public assistantChanged(trainer: Trainer): void {
    this.headTrainers = this.allTrainers
      .filter(value => value != trainer);
  }

}
