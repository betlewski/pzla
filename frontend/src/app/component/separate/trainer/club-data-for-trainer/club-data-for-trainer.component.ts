import {Component, OnInit} from '@angular/core';
import {ClubType} from "../../../../utils/club-type";
import {Router} from "@angular/router";
import {AuthService} from "../../../../service/auth/auth.service";
import {ClubService} from "../../../../service/rest/club/club.service";
import {Club} from "../../../../model/club.model";

@Component({
  selector: 'app-club-data-for-trainer',
  templateUrl: './club-data-for-trainer.component.html',
  styleUrls: ['./club-data-for-trainer.component.css']
})
export class ClubDataForTrainerComponent implements OnInit {

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
    this.clubService.findByTrainerEmail(email)
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
