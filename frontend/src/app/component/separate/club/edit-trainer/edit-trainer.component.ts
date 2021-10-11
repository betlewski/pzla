import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../../service/auth/auth.service";
import {Trainer} from "../../../../model/trainer.model";
import {Gender} from "../../../../utils/gender";
import {LicenseType} from "../../../../utils/license-type";
import {TrainerService} from "../../../../service/rest/trainer/trainer.service";
import {Utils} from "../../../../utils/utils";

@Component({
  selector: 'app-edit-trainer',
  templateUrl: './edit-trainer.component.html',
  styleUrls: ['./edit-trainer.component.css']
})
export class EditTrainerComponent implements OnInit {

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

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private trainerService: TrainerService) {
    // @ts-ignore
    this.email = this.route.snapshot.paramMap.get('email');
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
