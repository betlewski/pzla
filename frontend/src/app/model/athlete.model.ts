import {Gender} from "../utils/gender";
import {MedicalStatus} from "../utils/medical-status";
import {AthleteType} from "../utils/athlete-type";

export class Athlete {

  id: number | null;
  email: string | null;
  password: string | null;
  fullName: string | null;
  birthDate: string | null;
  gender: Gender | null;
  weight: number | null;
  height: number | null;
  nationalTeamMember: boolean | null;
  medicalStatus: MedicalStatus | null;
  athleteType: AthleteType | null;
  address: string | null;
  personalPhoneNumber: string | null;
  alarmPhoneNumber: string | null;
  registrationDate: string | null;

  constructor(id: number | null, email: string | null, password: string | null,
              fullName: string | null, birthDate: string | null, gender: Gender | null,
              weight: number | null, height: number | null, nationalTeamMember: boolean | null,
              medicalStatus: MedicalStatus | null, athleteType: AthleteType | null, address: string | null,
              personalPhoneNumber: string | null, alarmPhoneNumber: string | null, registrationDate: string | null) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.fullName = fullName;
    this.birthDate = birthDate;
    this.gender = gender;
    this.weight = weight;
    this.height = height;
    this.nationalTeamMember = nationalTeamMember;
    this.medicalStatus = medicalStatus;
    this.athleteType = athleteType;
    this.address = address;
    this.personalPhoneNumber = personalPhoneNumber;
    this.alarmPhoneNumber = alarmPhoneNumber;
    this.registrationDate = registrationDate;
  }

  public static register(email: string | null, password: string | null, fullName: string | null,
                         birthDate: string | null, gender: Gender | null, weight: number | null,
                         height: number | null, nationalTeamMember: boolean | null,
                         medicalStatus: MedicalStatus | null, athleteType: AthleteType | null, address: string | null,
                         personalPhoneNumber: string | null, alarmPhoneNumber: string | null) {
    return new Athlete(null, email, password, fullName, birthDate, gender, weight, height, nationalTeamMember,
      medicalStatus, athleteType, address, personalPhoneNumber, alarmPhoneNumber, null);
  }

}
