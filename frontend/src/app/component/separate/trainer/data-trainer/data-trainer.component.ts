import {Component, OnInit} from '@angular/core';
import {Gender} from "../../../../utils/gender";
import {LicenseType} from "../../../../utils/license-type";
import {Router} from "@angular/router";
import {AuthService} from "../../../../service/auth/auth.service";
import {TrainerService} from "../../../../service/rest/trainer/trainer.service";
import {Trainer} from "../../../../model/trainer.model";
import {Utils} from "../../../../utils/utils";

@Component({
  selector: 'app-data-trainer',
  templateUrl: './data-trainer.component.html',
  styleUrls: ['./data-trainer.component.css']
})
export class DataTrainerComponent implements OnInit {

  email: string = "";
  fullName: string | null = "";
  birthDate: string | null = "";
  gender: string | null = "";
  licenseType: string | null = "";
  address: string | null = "";
  phoneNumber: string | null = "";
  registrationDate: string | null = "";

  genderTypes: Gender[] = Gender.values();
  genderUtils = Gender;
  licenseTypes: LicenseType[] = LicenseType.values();
  licenseUtils = LicenseType;

  viewMode = true;

  constructor(private router: Router,
              private authService: AuthService,
              private trainerService: TrainerService) {
    this.email = this.authService.getUserEmail();
  }

  ngOnInit(): void {
    this.trainerService.findByEmail(this.email)
      .subscribe(data => this.fillFormDataFromTrainer(data));
  }

  private fillFormDataFromTrainer(trainer: Trainer) {
    if (trainer != null) {
      this.fullName = trainer.fullName;
      this.birthDate = trainer.birthDate;
      // @ts-ignore
      this.gender = Gender[trainer.gender];
      // @ts-ignore
      this.licenseType = LicenseType[trainer.licenseType];
      this.address = trainer.address;
      this.phoneNumber = trainer.phoneNumber;
      this.registrationDate = trainer.registrationDate;
    }
  }

  public editData() {
    this.viewMode = false;
  }

  public changePwd() {
    this.router.navigate(["/home/trainer/data/password"]).then();
  }

  public saveData() {
    if (this.checkIfDataNotEmpty()) {
      const newTrainer = Trainer.register(null, null, this.fullName, this.birthDate, // @ts-ignore
        Gender[this.gender], LicenseType[this.licenseType], this.address, this.phoneNumber);
      this.trainerService.edit(this.email, newTrainer)
        .subscribe(() => this.viewMode = true);
    }
  }

  private checkIfDataNotEmpty(): boolean {
    return Utils.checkStringIfNotEmpty(this.fullName)
      && this.birthDate != null && this.gender != null && this.licenseType != null;
  }

}
