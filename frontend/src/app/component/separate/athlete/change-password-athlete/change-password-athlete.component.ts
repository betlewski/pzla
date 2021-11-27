import {Component, OnInit} from '@angular/core';
import {TextConstants} from "../../../../utils/text-constants";
import {Utils} from "../../../../utils/utils";
import {AthleteService} from "../../../../service/rest/athlete/athlete.service";

@Component({
  selector: 'app-change-password-athlete',
  templateUrl: './change-password-athlete.component.html',
  styleUrls: ['./change-password-athlete.component.css']
})
export class ChangePasswordAthleteComponent implements OnInit {

  oldPassword: string = "";
  newPassword1: string = "";
  newPassword2: string = "";
  feedback: string = "";

  constructor(private athleteService: AthleteService) {
  }

  ngOnInit(): void {
  }

  public changePwd() {
    if (this.checkIfDataNotEmpty()) {
      if (this.checkIfNewPasswordsEquals()) {
        this.athleteService.changePassword(this.oldPassword, this.newPassword1)
          .subscribe(() => {
            this.feedback = TextConstants.CHANGE_PWD_SUCCESSFUL;
            this.cleanData();
          }, error => {
            this.setFeedbackIfError(error);
          })
      } else {
        this.feedback = TextConstants.CHANGE_PWD_NOT_EQUALS_NEW;
      }
    } else {
      this.feedback = TextConstants.CHANGE_PWD_INCOMPLETE_DATA;
    }
  }

  private checkIfDataNotEmpty(): boolean {
    return Utils.checkStringIfNotEmpty(this.oldPassword)
      && Utils.checkStringIfNotEmpty(this.newPassword1)
      && Utils.checkStringIfNotEmpty(this.newPassword2);
  }

  private checkIfNewPasswordsEquals(): boolean {
    return this.newPassword1 == this.newPassword2;
  }

  private cleanData(): void {
    this.oldPassword = "";
    this.newPassword1 = "";
    this.newPassword2 = "";
  }

  private setFeedbackIfError(error: any): void {
    if (error.status == 403) {
      this.feedback = TextConstants.CHANGE_PWD_INVALID_OLD;
    } else {
      this.feedback = TextConstants.CHANGE_PWD_WEAK_NEW;
    }
  }

}
