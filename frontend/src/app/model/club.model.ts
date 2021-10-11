import {ClubType} from "../utils/club-type";

export class Club {

  id: number | null;
  email: string | null;
  password: string | null;
  name: string | null;
  nipNumber: string | null;
  clubType: ClubType | null;
  creationDate: string | null;
  address: string | null;
  phoneNumber: string | null;
  registrationDate: string | null;

  constructor(id: number | null, email: string | null, password: string | null,
              name: string | null, nipNumber: string | null, clubType: ClubType | null,
              creationDate: string | null, address: string | null,
              phoneNumber: string | null, registrationDate: string | null) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.nipNumber = nipNumber;
    this.clubType = clubType;
    this.creationDate = creationDate;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.registrationDate = registrationDate;
  }

  public static register(name: string, nipNumber: string, email: string) {
    return new Club(null, email, null, name, nipNumber, null,
      null, null, null, null);
  }

  public static edit(name: string | null, nipNumber: string | null, clubType: ClubType | null,
                     address: string | null, phoneNumber: string | null,
                     creationDate: string | null, registrationDate: string | null) {
    return new Club(null, null, null, name, nipNumber, clubType,
      creationDate, address, phoneNumber, registrationDate);
  }

}
