import {Component, OnInit} from '@angular/core';
import {Gender} from "../../../../utils/gender";
import {Router} from "@angular/router";
import {AuthService} from "../../../../service/auth/auth.service";
import {Utils} from "../../../../utils/utils";
import {MedicalStatus} from "../../../../utils/medical-status";
import {AthleteType} from "../../../../utils/athlete-type";
import {Athlete} from "../../../../model/athlete.model";
import {AthleteService} from "../../../../service/rest/athlete/athlete.service";

@Component({
  selector: 'app-data-athlete',
  templateUrl: './data-athlete.component.html',
  styleUrls: ['./data-athlete.component.css']
})
export class DataAthleteComponent implements OnInit {

  email: string = "";
  fullName: string | null = null;
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
  registrationDate: string | null = null;

  genderTypes: Gender[] = Gender.values();
  genderUtils = Gender;
  medicalStatuses: MedicalStatus[] = MedicalStatus.values();
  medicalUtils = MedicalStatus;
  athleteTypes: AthleteType[] = AthleteType.values();
  athleteUtils = AthleteType;

  viewMode = true;

  constructor(private router: Router,
              private authService: AuthService,
              private athleteService: AthleteService) {
    this.email = this.authService.getUserEmail();
  }

  ngOnInit(): void {
    this.athleteService.findByEmail(this.email)
      .subscribe(data => this.fillFormDataFromAthlete(data));
  }

  private fillFormDataFromAthlete(athlete: Athlete) {
    if (athlete != null) {
      this.fullName = athlete.fullName;
      this.birthDate = athlete.birthDate; // @ts-ignore
      this.gender = Gender[athlete.gender];
      this.weight = athlete.weight;
      this.height = athlete.height;
      this.nationalTeamMember = athlete.nationalTeamMember; // @ts-ignore
      this.medicalStatus = MedicalStatus[athlete.medicalStatus]; // @ts-ignore
      this.athleteType = AthleteType[athlete.athleteType];
      this.birthDate = athlete.birthDate;
      this.address = athlete.address;
      this.personalPhoneNumber = athlete.personalPhoneNumber;
      this.alarmPhoneNumber = athlete.alarmPhoneNumber;
      this.registrationDate = athlete.registrationDate;
    }
  }

  public changePwd() {
    this.router.navigate(["/home/athlete/data/password"]).then();
  }

  public editData() {
    this.viewMode = false;
  }

  public saveData() {
    if (this.checkIfDataNotEmpty()) {
      const newAthlete = Athlete.register(null, null, this.fullName, this.birthDate, // @ts-ignore
        Gender[this.gender], this.weight, this.height, this.nationalTeamMember, MedicalStatus[this.medicalStatus], AthleteType[this.athleteType],
        this.address, this.personalPhoneNumber, this.alarmPhoneNumber);
      this.athleteService.edit(this.email, newAthlete)
        .subscribe(() => this.viewMode = true);
    }
  }

  private checkIfDataNotEmpty(): boolean {
    return Utils.checkStringIfNotEmpty(this.fullName)
      && this.birthDate != null && this.gender != null && this.medicalStatus != null && this.athleteType != null;
  }

}
