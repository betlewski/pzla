import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./component/common/login/login.component";
import {RegistrationComponent} from "./component/common/registration/registration.component";
import {AuthGuardClub} from "./service/auth-guard/club/auth-guard-club.service";
import {HomeClubComponent} from "./component/separate/club/home-club/home-club.component";
import {DataClubComponent} from "./component/separate/club/data-club/data-club.component";
import {ChangePasswordClubComponent} from "./component/separate/club/change-password-club/change-password-club.component";
import {TrainersComponent} from "./component/separate/club/trainers/trainers.component";
import {EditTrainerComponent} from "./component/separate/club/edit-trainer/edit-trainer.component";
import {NewTrainerComponent} from "./component/separate/club/new-trainer/new-trainer.component";
import {AthletesComponent} from "./component/separate/club/athletes/athletes.component";
import {EditAthleteComponent} from "./component/separate/club/edit-athlete/edit-athlete.component";
import {NewAthleteComponent} from "./component/separate/club/new-athlete/new-athlete.component";
import {TrainingGroupsComponent} from "./component/separate/club/training-groups/training-groups.component";
import {NewTrainingGroupComponent} from "./component/separate/club/new-training-group/new-training-group.component";
import {EditTrainingGroupComponent} from "./component/separate/club/edit-training-group/edit-training-group.component";
import {HomeTrainerComponent} from "./component/separate/trainer/home-trainer/home-trainer.component";
import {AuthGuardTrainer} from "./service/auth-guard/trainer/auth-guard-trainer.service";
import {DataTrainerComponent} from "./component/separate/trainer/data-trainer/data-trainer.component";
import {ChangePasswordTrainerComponent} from "./component/separate/trainer/change-password-trainer/change-password-trainer.component";
import {ClubDataForTrainerComponent} from "./component/separate/trainer/club-data-for-trainer/club-data-for-trainer.component";
import {TrainingGroupsForTrainerComponent} from "./component/separate/trainer/training-groups-for-trainer/training-groups-for-trainer.component";
import {EditTrainingGroupsForTrainerComponent} from "./component/separate/trainer/edit-training-groups-for-trainer/edit-training-groups-for-trainer.component";
import {CalendarTrainerComponent} from "./component/separate/trainer/calendar-trainer/calendar-trainer.component";
import {CalendarClubComponent} from "./component/separate/club/calendar-club/calendar-club.component";
import {HomeAthleteComponent} from "./component/separate/athlete/home-athlete/home-athlete.component";
import {AuthGuardAthlete} from "./service/auth-guard/athlete/auth-guard-athlete.service";
import {DataAthleteComponent} from "./component/separate/athlete/data-athlete/data-athlete.component";
import {ChangePasswordAthleteComponent} from "./component/separate/athlete/change-password-athlete/change-password-athlete.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {
    path: 'home',
    children: [
      {
        path: 'club',
        component: HomeClubComponent,
        canActivate: [AuthGuardClub],
        children: [
          {
            path: 'data',
            component: DataClubComponent,
            canActivate: [AuthGuardClub]
          },
          {
            path: 'data/password',
            component: ChangePasswordClubComponent,
            canActivate: [AuthGuardClub]
          },
          {
            path: 'trainers',
            component: TrainersComponent,
            canActivate: [AuthGuardClub]
          },
          {
            path: 'trainers/edit/:email',
            component: EditTrainerComponent,
            canActivate: [AuthGuardClub]
          },
          {
            path: 'trainers/add',
            component: NewTrainerComponent,
            canActivate: [AuthGuardClub]
          },
          {
            path: 'athletes',
            component: AthletesComponent,
            canActivate: [AuthGuardClub]
          },
          {
            path: 'athletes/edit/:email',
            component: EditAthleteComponent,
            canActivate: [AuthGuardClub]
          },
          {
            path: 'athletes/add',
            component: NewAthleteComponent,
            canActivate: [AuthGuardClub]
          },
          {
            path: 'training-groups',
            component: TrainingGroupsComponent,
            canActivate: [AuthGuardClub]
          },
          {
            path: 'training-groups/add',
            component: NewTrainingGroupComponent,
            canActivate: [AuthGuardClub]
          },
          {
            path: 'training-groups/edit/:name',
            component: EditTrainingGroupComponent,
            canActivate: [AuthGuardClub]
          },
          {
            path: 'calendar',
            component: CalendarClubComponent,
            canActivate: [AuthGuardClub]
          }
        ]
      },
      {
        path: 'trainer',
        component: HomeTrainerComponent,
        canActivate: [AuthGuardTrainer],
        children: [
          {
            path: 'data',
            component: DataTrainerComponent,
            canActivate: [AuthGuardTrainer]
          },
          {
            path: 'data/password',
            component: ChangePasswordTrainerComponent,
            canActivate: [AuthGuardTrainer]
          },
          {
            path: 'club',
            component: ClubDataForTrainerComponent,
            canActivate: [AuthGuardTrainer]
          },
          {
            path: 'training-groups',
            component: TrainingGroupsForTrainerComponent,
            canActivate: [AuthGuardTrainer]
          },
          {
            path: 'training-groups/edit/:name',
            component: EditTrainingGroupsForTrainerComponent,
            canActivate: [AuthGuardTrainer]
          },
          {
            path: 'calendar',
            component: CalendarTrainerComponent,
            canActivate: [AuthGuardTrainer]
          }
        ]
      },
      {
        path: 'athlete',
        component: HomeAthleteComponent,
        canActivate: [AuthGuardAthlete],
        children: [
          {
            path: 'data',
            component: DataAthleteComponent,
            canActivate: [AuthGuardAthlete]
          },
          {
            path: 'data/password',
            component: ChangePasswordAthleteComponent,
            canActivate: [AuthGuardAthlete]
          },
          {
            path: 'club',
            component: ClubDataForTrainerComponent,
            canActivate: [AuthGuardAthlete]
          },
          {
            path: 'training-groups',
            component: TrainingGroupsForTrainerComponent,
            canActivate: [AuthGuardAthlete]
          },
          {
            path: 'calendar',
            component: CalendarTrainerComponent,
            canActivate: [AuthGuardAthlete]
          }
        ]
      },
    ]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
