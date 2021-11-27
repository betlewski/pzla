import {Component, OnInit} from '@angular/core';
import {TrainingGroup} from "../../../../model/training-group.model";
import {GroupType} from "../../../../utils/group-type";
import {Router} from "@angular/router";
import {AuthService} from "../../../../service/auth/auth.service";
import {TrainingGroupService} from "../../../../service/rest/training-group/training-group.service";

@Component({
  selector: 'app-training-groups-for-athlete',
  templateUrl: './training-groups-for-athlete.component.html',
  styleUrls: ['./training-groups-for-athlete.component.css']
})
export class TrainingGroupsForAthleteComponent implements OnInit {

  trainingGroups: TrainingGroup[] = [];
  groupUtils = GroupType;

  constructor(private router: Router,
              private authService: AuthService,
              private trainingGroupService: TrainingGroupService) {
  }

  ngOnInit(): void {
    this.getAllTrainingGroupsForAthlete();
  }

  private getAllTrainingGroupsForAthlete(): void {
    const email = this.authService.getUserEmail();
    this.trainingGroupService.findAllByAthlete(email).subscribe(
      list => {
        this.trainingGroups = list;
        // @ts-ignore
        this.trainingGroups.sort((a, b) => a.name?.localeCompare(b.name));
      });
  }

}
