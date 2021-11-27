import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './component/common/login/login.component';
import {RegistrationComponent} from './component/common/registration/registration.component';
import {FormsModule} from "@angular/forms";
import {CryptoJsService} from "./service/crypto-js/crypto-js.service";
import {AuthService} from "./service/auth/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClubService} from "./service/rest/club/club.service";
import {AuthGuardClub} from "./service/auth-guard/club/auth-guard-club.service";
import {AuthGuardTrainer} from "./service/auth-guard/trainer/auth-guard-trainer.service";
import {AuthGuardAthlete} from "./service/auth-guard/athlete/auth-guard-athlete.service";
import {HomeClubComponent} from './component/separate/club/home-club/home-club.component';
import {DataClubComponent} from './component/separate/club/data-club/data-club.component';
import {ChangePasswordClubComponent} from './component/separate/club/change-password-club/change-password-club.component';
import {TrainersComponent} from './component/separate/club/trainers/trainers.component';
import {NewTrainerComponent} from './component/separate/club/new-trainer/new-trainer.component';
import {EditTrainerComponent} from './component/separate/club/edit-trainer/edit-trainer.component';
import {AthletesComponent} from './component/separate/club/athletes/athletes.component';
import {NewAthleteComponent} from './component/separate/club/new-athlete/new-athlete.component';
import {EditAthleteComponent} from './component/separate/club/edit-athlete/edit-athlete.component';
import {TrainerService} from "./service/rest/trainer/trainer.service";
import {AthleteService} from "./service/rest/athlete/athlete.service";
import {TrainingGroupService} from "./service/rest/training-group/training-group.service";
import {TrainingGroupsComponent} from './component/separate/club/training-groups/training-groups.component';
import {NewTrainingGroupComponent} from './component/separate/club/new-training-group/new-training-group.component';
import {EditTrainingGroupComponent} from './component/separate/club/edit-training-group/edit-training-group.component';
import {HomeTrainerComponent} from './component/separate/trainer/home-trainer/home-trainer.component';
import {DataTrainerComponent} from './component/separate/trainer/data-trainer/data-trainer.component';
import {ChangePasswordTrainerComponent} from './component/separate/trainer/change-password-trainer/change-password-trainer.component';
import {ClubDataForTrainerComponent} from './component/separate/trainer/club-data-for-trainer/club-data-for-trainer.component';
import {TrainingGroupsForTrainerComponent} from './component/separate/trainer/training-groups-for-trainer/training-groups-for-trainer.component';
import {EditTrainingGroupsForTrainerComponent} from './component/separate/trainer/edit-training-groups-for-trainer/edit-training-groups-for-trainer.component';
import {TrainingService} from "./service/rest/training/training.service";
import {CalendarTrainerComponent} from './component/separate/trainer/calendar-trainer/calendar-trainer.component';
import {CalendarClubComponent} from './component/separate/club/calendar-club/calendar-club.component';
import {HomeAthleteComponent} from './component/separate/athlete/home-athlete/home-athlete.component';
import {DataAthleteComponent} from './component/separate/athlete/data-athlete/data-athlete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeClubComponent,
    DataClubComponent,
    ChangePasswordClubComponent,
    TrainersComponent,
    NewTrainerComponent,
    EditTrainerComponent,
    AthletesComponent,
    NewAthleteComponent,
    EditAthleteComponent,
    TrainingGroupsComponent,
    NewTrainingGroupComponent,
    EditTrainingGroupComponent,
    HomeTrainerComponent,
    DataTrainerComponent,
    ChangePasswordTrainerComponent,
    ClubDataForTrainerComponent,
    TrainingGroupsForTrainerComponent,
    EditTrainingGroupsForTrainerComponent,
    CalendarTrainerComponent,
    CalendarClubComponent,
    HomeAthleteComponent,
    DataAthleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
    NgbModule
  ],
  providers: [
    AuthService,
    AuthGuardClub,
    AuthGuardTrainer,
    AuthGuardAthlete,
    CryptoJsService,
    ClubService,
    TrainerService,
    AthleteService,
    TrainingGroupService,
    TrainingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
