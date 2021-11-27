import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../../service/auth/auth.service";
import {ClubService} from "../../../../service/rest/club/club.service";
import {Club} from "../../../../model/club.model";
import {ClubType} from "../../../../utils/club-type";

@Component({
  selector: 'app-club-data-for-athlete',
  templateUrl: './club-data-for-athlete.component.html',
  styleUrls: ['./club-data-for-athlete.component.css']
})
export class ClubDataForAthleteComponent implements OnInit {

  name: string | null = "";
  nipNumber: string | null = "";
  clubType: string | null = "";
  address: string | null = "";
  phoneNumber: string | null = "";
  creationDate: string | null = "";
  registrationDate: string | null = "";

  constructor(private router: Router,
              private authService: AuthService,
              private clubService: ClubService) {
  }

  ngOnInit(): void {
    const email = this.authService.getUserEmail();
    this.clubService.findByMemberEmail(email)
      .subscribe(club =>
        this.fillFormDataFromClub(club));
  }

  private fillFormDataFromClub(club: Club) {
    if (club != null) {
      this.name = club.name;
      this.nipNumber = club.nipNumber;
      // @ts-ignore
      this.clubType = ClubType.translate(club.clubType);
      this.address = club.address;
      this.phoneNumber = club.phoneNumber;
      this.creationDate = club.creationDate;
      this.registrationDate = club.registrationDate;
    }
  }

}
