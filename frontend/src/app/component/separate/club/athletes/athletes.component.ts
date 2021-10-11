import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../../service/auth/auth.service";
import {Athlete} from "../../../../model/athlete.model";
import {AthleteType} from "../../../../utils/athlete-type";
import {AthleteService} from "../../../../service/rest/athlete/athlete.service";
import {MedicalStatus} from "../../../../utils/medical-status";

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.css']
})
export class AthletesComponent implements OnInit {

  athletes: Athlete[] = [];
  athleteUtils = AthleteType;
  medicalUtils = MedicalStatus;

  constructor(private router: Router,
              private authService: AuthService,
              private athleteService: AthleteService) {
  }

  ngOnInit(): void {
    this.getAllTrainersFromClub();
  }

  private getAllTrainersFromClub(): void {
    const email = this.authService.getUserEmail();
    this.athleteService.findAllByClub(email).subscribe(
      list => {
        this.athletes = list; // @ts-ignore
        this.athletes.sort((a, b) => a.email?.localeCompare(b.email));
      });
  }

  public showDetails(athlete: Athlete): void {
    this.router.navigate(["/home/club/athletes/edit", athlete.email]).then();
  }

  public addAthlete(): void {
    this.router.navigate(["/home/club/athletes/add"]).then();
  }

}
