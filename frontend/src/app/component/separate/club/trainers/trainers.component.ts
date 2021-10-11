import {Component, OnInit} from '@angular/core';
import {Trainer} from "../../../../model/trainer.model";
import {TrainerService} from "../../../../service/rest/trainer/trainer.service";
import {AuthService} from "../../../../service/auth/auth.service";
import {LicenseType} from "../../../../utils/license-type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  trainers: Trainer[] = [];
  licenseUtils = LicenseType;

  constructor(private router: Router,
              private authService: AuthService,
              private trainerService: TrainerService) {
  }

  ngOnInit(): void {
    this.getAllTrainersFromClub();
  }

  private getAllTrainersFromClub(): void {
    const email = this.authService.getUserEmail();
    this.trainerService.findAllByClub(email).subscribe(
      list => {
        this.trainers = list;
        // @ts-ignore
        this.trainers.sort((a, b) => a.email?.localeCompare(b.email));
      });
  }

  public showDetails(trainer: Trainer): void {
    this.router.navigate(["/home/club/trainers/edit", trainer.email]).then();
  }

  public addTrainer(): void {
    this.router.navigate(["/home/club/trainers/add"]).then();
  }

}
