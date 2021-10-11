import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Utils} from "../../../utils/utils";
import {AuthService} from "../../../service/auth/auth.service";
import {UserRole} from "../../../utils/user-role";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = "";
  public password = "";

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
  }

  public login() {
    if (Utils.checkStringIfNotEmpty(this.email) && Utils.checkStringIfNotEmpty(this.password)) {
      this.authService.authenticate(this.email, this.password)
        .subscribe(() => {
          this.navigateUser();
        }, () => {
          this.clearFields();
        });
    }
  }

  private clearFields() {
    this.email = "";
    this.password = "";
  }

  private navigateUser() {
    const userRole = this.authService.getUserRole();
    if (userRole == UserRole.ATHLETE) {
      this.router.navigate(["/home/athlete"]);
    } else if (userRole == UserRole.TRAINER) {
      this.router.navigate(["/home/trainer"]);
    } else if (userRole == UserRole.CLUB) {
      this.router.navigate(["/home/club"]);
    }
  }

}
