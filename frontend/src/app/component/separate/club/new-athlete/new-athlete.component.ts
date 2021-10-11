import {Component, OnInit} from '@angular/core';
import {Gender} from "../../../../utils/gender";
import {Router} from "@angular/router";
import {AuthService} from "../../../../service/auth/auth.service";
import {TextConstants} from "../../../../utils/text-constants";
import {Utils} from "../../../../utils/utils";
import {MedicalStatus} from "../../../../utils/medical-status";
import {AthleteType} from "../../../../utils/athlete-type";
import {Athlete} from "../../../../model/athlete.model";
import {AthleteService} from "../../../../service/rest/athlete/athlete.service";

@Component({
  selector: 'app-new-athlete',
  templateUrl: './new-athlete.component.html',
  styleUrls: ['./new-athlete.component.css']
})
export class NewAthleteComponent implements OnInit {

  fullName: string | null = null;
  email: string | null = null;
  password: string | null = null;
  birthDate: string | null = null;
  gender: string | null = null;
  weight: number | null = null;
  height: number | null = null;
  nationalTeamMember: boolean | null = null;
  medicalStatus: string | null = null;
  athleteType: string | null = null;
  address: string | null = null;
  personalPhoneNumber: string | null = null;
  alarmPhoneNumber: string | null = null;

  genderTypes: Gender[] = Gender.values();
  genderUtils = Gender;
  medicalStatuses: MedicalStatus[] = MedicalStatus.values();
  medicalUtils = MedicalStatus;
  athleteTypes: AthleteType[] = AthleteType.values();
  athleteUtils = AthleteType;

  feedback: string = "";
  clubEmail: string = "";

  constructor(private router: Router,
              private authService: AuthService,
              private athleteService: AthleteService) {
    this.clubEmail = this.authService.getUserEmail();
  }

  ngOnInit(): void {
  }

  public add() {
    if (this.checkIfDataCorrect()) {
      // @ts-ignore
      const newAthlete = Athlete.register(this.email, this.password, this.fullName, this.birthDate, // @ts-ignore
        Gender[this.gender], this.weight, this.height, this.nationalTeamMember, MedicalStatus[this.medicalStatus], AthleteType[this.athleteType],
        this.address, this.personalPhoneNumber, this.alarmPhoneNumber);
      this.athleteService.add(newAthlete, this.clubEmail)
        .subscribe(() => {
            this.router.navigate(["/home/club/athletes"]).then();
          },
          error => {
            if (error.status == 409) {
              this.feedback = TextConstants.REGISTRATION_DUPLICATED_EMAIL;
            } else {
              this.feedback = TextConstants.REGISTRATION_INVALID_DATA;
            }
          });
    }
  }

  private checkIfDataCorrect(): boolean {
    if (!Utils.checkStringIfNotEmpty(this.fullName)
      || this.birthDate == null || this.gender == null || this.medicalStatus == null || this.athleteType == null) {
      this.feedback = TextConstants.REGISTRATION_INCOMPLETE_DATA;
      return false;
    } else if (!Utils.checkIfEmailCorrect(this.email)) {
      this.feedback = TextConstants.REGISTRATION_INVALID_EMAIL;
      return false;
    } else if (!Utils.checkIfPasswordCorrect(this.password)) {
      this.feedback = TextConstants.REGISTRATION_WEAK_PASSWORD;
      return false;
    }
    return true;
  }

}
