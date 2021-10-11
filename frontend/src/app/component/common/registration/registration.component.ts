import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Utils} from "../../../utils/utils";
import {AuthService} from "../../../service/auth/auth.service";
import {TextConstants} from "../../../utils/text-constants";
import {ClubService} from "../../../service/rest/club/club.service";
import {Club} from "../../../model/club.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css',
    '../login/login.component.css']
})
export class RegistrationComponent implements OnInit {

  public name = "";
  public nipNumber = "";
  public email = "";
  public feedback = "";

  constructor(private router: Router,
              private authService: AuthService,
              private clubService: ClubService) {
  }

  ngOnInit() {
  }

  public register() {
    if (this.checkIfDataCorrect()) {
      const club = Club.register(this.name, this.nipNumber, this.email);
      this.clubService.requestClubRegistration(club).subscribe(
        () => {
          this.clearFields();
          this.feedback = TextConstants.REGISTRATION_COMPLETED;
        },
        () => {
            this.feedback = TextConstants.REGISTRATION_UNCOMPLETED;
        });
    }
  }

  private checkIfDataCorrect(): boolean {
    if (!Utils.checkStringIfNotEmpty(this.name)) {
      this.feedback = TextConstants.REGISTRATION_INCOMPLETE_DATA;
      return false;
    } else if (!Utils.checkIfNipNumberCorrect(this.nipNumber)) {
      this.feedback = TextConstants.REGISTRATION_INVALID_NIP;
      return false;
    } else if (!Utils.checkIfEmailCorrect(this.email)) {
      this.feedback = TextConstants.REGISTRATION_INVALID_EMAIL;
      return false;
    }
    return true;
  }

  private clearFields() {
    this.name = "";
    this.nipNumber = "";
    this.email = "";
  }

}
