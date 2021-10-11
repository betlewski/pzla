import { Component, OnInit } from '@angular/core';
import {TrainingGroup} from "../../../../model/training-group.model";
import {GroupType} from "../../../../utils/group-type";
import {Router} from "@angular/router";
import {AuthService} from "../../../../service/auth/auth.service";
import {TrainingGroupService} from "../../../../service/rest/training-group/training-group.service";

@Component({
  selector: 'app-training-groups-for-trainer',
  templateUrl: './training-groups-for-trainer.component.html',
  styleUrls: ['./training-groups-for-trainer.component.css']
})
export class TrainingGroupsForTrainerComponent implements OnInit {

  trainingGroups: TrainingGroup[] = [];
  groupUtils = GroupType;

  constructor(private router: Router,
              private authService: AuthService,
              private trainingGroupService: TrainingGroupService) {
  }

  ngOnInit(): void {
    this.getAllTrainingGroupsForTrainer();
  }

  private getAllTrainingGroupsForTrainer(): void {
    const email = this.authService.getUserEmail();
    this.trainingGroupService.findAllByTrainer(email).subscribe(
      list => {
        this.trainingGroups = list;
        // @ts-ignore
        this.trainingGroups.sort((a, b) => a.name?.localeCompare(b.name));
      });
  }

  public showDetails(trainingGroup: TrainingGroup): void {
    this.router.navigate(["/home/trainer/training-groups/edit", trainingGroup.name]).then();
  }

}
