import {Gender} from "../utils/gender";
import {LicenseType} from "../utils/license-type";

export class Trainer {

  id: number | null;
  email: string | null | undefined;
  password: string | null;
  fullName: string | null;
  birthDate: string | null;
  gender: Gender | null;
  licenseType: LicenseType | null;
  address: string | null;
  phoneNumber: string | null;
  registrationDate: string | null;

  constructor(id: number | null, email: string | null | undefined, password: string | null,
              fullName: string | null, birthDate: string | null, gender: Gender | null,
              licenseType: LicenseType | null, address: string | null, phoneNumber: string | null, registrationDate: string | null) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.fullName = fullName;
    this.birthDate = birthDate;
    this.gender = gender;
    this.licenseType = licenseType;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.registrationDate = registrationDate;
  }

  public static register(email: string | null, password: string | null, fullName: string | null,
                         birthDate: string | null, gender: Gender | null, licenseType: LicenseType | null,
                         address: string | null, phoneNumber: string | null) {
    return new Trainer(null, email, password, fullName, birthDate, gender,
      licenseType, address, phoneNumber, null);
  }

}
