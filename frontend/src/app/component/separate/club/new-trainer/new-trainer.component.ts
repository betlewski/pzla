import {Component, OnInit} from '@angular/core';
import {Gender} from "../../../../utils/gender";
import {LicenseType} from "../../../../utils/license-type";
import {Router} from "@angular/router";
import {AuthService} from "../../../../service/auth/auth.service";
import {TrainerService} from "../../../../service/rest/trainer/trainer.service";
import {Trainer} from "../../../../model/trainer.model";
import {Utils} from "../../../../utils/utils";
import {TextConstants} from "../../../../utils/text-constants";

@Component({
  selector: 'app-new-trainer',
  templateUrl: './new-trainer.component.html',
  styleUrls: ['./new-trainer.component.css']
})
export class NewTrainerComponent implements OnInit {

  fullName: string | null = null;
  email: string | null = null;
  password: string | null = null;
  birthDate: string | null = null;
  gender: string | null = null;
  licenseType: string | null = null;
  address: string | null = null;
  phoneNumber: string | null = null;

  genderTypes: Gender[] = Gender.values();
  genderUtils = Gender;
  licenseTypes: LicenseType[] = LicenseType.values();
  licenseUtils = LicenseType;

  feedback: string = "";
  clubEmail: string = "";

  constructor(private router: Router,
              private authService: AuthService,
              private trainerService: TrainerService) {
    this.clubEmail = this.authService.getUserEmail();
  }

  ngOnInit(): void {
  }

  public add() {
    if (this.checkIfDataCorrect()) {
      // @ts-ignore
      const trainer = Trainer.register(this.email, this.password, this.fullName, this.birthDate, // @ts-ignore
        Gender[this.gender], LicenseType[this.licenseType], this.address, this.phoneNumber);
      this.trainerService.add(trainer, this.clubEmail)
        .subscribe(() => {
            this.router.navigate(["/home/club/trainers"]).then();
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
      || this.birthDate == null || this.gender == null || this.licenseType == null) {
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
