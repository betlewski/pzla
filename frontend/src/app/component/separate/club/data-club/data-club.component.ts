import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../../service/auth/auth.service";
import {Utils} from "../../../../utils/utils";
import {ClubType} from "../../../../utils/club-type";
import {ClubService} from "../../../../service/rest/club/club.service";
import {Club} from "../../../../model/club.model";

@Component({
  selector: 'app-data-club',
  templateUrl: './data-club.component.html',
  styleUrls: ['./data-club.component.css']
})
export class DataClubComponent implements OnInit {

  name: string | null = "";
  nipNumber: string | null = "";
  clubType: string | null = "";
  address: string | null = "";
  phoneNumber: string | null = "";
  creationDate: string | null = "";
  registrationDate: string | null = "";

  clubTypes: ClubType[] = ClubType.values();
  clubTypesUtils = ClubType;

  viewMode = true;

  constructor(private router: Router,
              private authService: AuthService,
              private clubService: ClubService) {
  }

  ngOnInit(): void {
    const email = this.authService.getUserEmail();
    this.clubService.findByEmail(email)
      .subscribe(club =>
        this.fillFormDataFromClub(club));
  }

  private fillFormDataFromClub(club: Club) {
    if (club != null) {
      this.name = club.name;
      this.nipNumber = club.nipNumber;
      // @ts-ignore
      this.clubType = ClubType[club.clubType];
      this.address = club.address;
      this.phoneNumber = club.phoneNumber;
      this.creationDate = club.creationDate;
      this.registrationDate = club.registrationDate;
    }
  }

  public changePwd() {
    this.router.navigate(["/home/club/data/password"]).then();
  }

  public editData() {
    this.viewMode = false;
  }

  public saveData() {
    if (this.checkIfDataNotEmpty()) {
      const email = this.authService.getUserEmail();
      // @ts-ignore
      const newClub = Club.edit(this.name, this.nipNumber, ClubType[this.clubType], this.address,
        this.phoneNumber, this.creationDate, this.registrationDate);
      this.clubService.edit(email, newClub)
        .subscribe(() => this.viewMode = true);
    }
  }

  private checkIfDataNotEmpty(): boolean {
    return Utils.checkStringIfNotEmpty(this.name) && Utils.checkIfNipNumberCorrect(this.nipNumber);
  }

}
