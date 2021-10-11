import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../../service/auth/auth.service";

@Component({
  selector: 'app-home-trainer',
  templateUrl: './home-trainer.component.html',
  styleUrls: ['./home-trainer.component.css']
})
export class HomeTrainerComponent implements OnInit {

  email = "";

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.email = this.authService.getUserEmail();
    this.router.navigate(["/home/trainer/data"]);
  }

  public logout() {
    this.authService.clearItems();
    this.router.navigate(["/login"]);
  }

}
