import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../../service/auth/auth.service";
import {TrainingGroup} from "../../../../model/training-group.model";
import {TrainingGroupService} from "../../../../service/rest/training-group/training-group.service";
import {GroupType} from "../../../../utils/group-type";

@Component({
  selector: 'app-training-groups',
  templateUrl: './training-groups.component.html',
  styleUrls: ['./training-groups.component.css']
})
export class TrainingGroupsComponent implements OnInit {

  trainingGroups: TrainingGroup[] = [];
  groupUtils = GroupType;

  constructor(private router: Router,
              private authService: AuthService,
              private trainingGroupService: TrainingGroupService) {
  }

  ngOnInit(): void {
    this.getAllTrainingGroupsFromClub();
  }

  private getAllTrainingGroupsFromClub(): void {
    const email = this.authService.getUserEmail();
    this.trainingGroupService.findAllByClub(email).subscribe(
      list => {
        this.trainingGroups = list;
        // @ts-ignore
        this.trainingGroups.sort((a, b) => a.name?.localeCompare(b.name));
      });
  }

  public showDetails(trainingGroup: TrainingGroup): void {
    this.router.navigate(["/home/club/training-groups/edit", trainingGroup.name]).then();
  }

  public addTrainingGroup(): void {
    this.router.navigate(["/home/club/training-groups/add"]).then();
  }

}
