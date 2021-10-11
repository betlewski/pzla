import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../../service/auth/auth.service";

@Component({
  selector: 'app-home-club',
  templateUrl: './home-club.component.html',
  styleUrls: ['./home-club.component.css']
})
export class HomeClubComponent implements OnInit {

  email = "";

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.email = this.authService.getUserEmail();
    this.router.navigate(["/home/club/data"]);
  }

  public logout() {
    this.authService.clearItems();
    this.router.navigate(["/login"]);
  }

}
