import {Component, OnInit} from '@angular/core';
import {CalendarComponent} from "../../../common/calendar/calendar.component";
import {TrainingGroup} from "../../../../model/training-group.model";
import {SessionType} from "../../../../utils/session-type";

@Component({
  selector: 'app-calendar-athlete',
  templateUrl: './calendar-athlete.component.html',
  styleUrls: ['./calendar-athlete.component.css']
})
export class CalendarAthleteComponent extends CalendarComponent implements OnInit {

  athleteEmail: string = "";
  trainingGroups: TrainingGroup[] = [];
  chosenGroup: TrainingGroup | null = null;

  ngOnInit(): void {
    this.athleteEmail = this.authService.getUserEmail();
    this.findAllTrainingGroups();
  }

  private findAllTrainingGroups() {
    this.trainingGroupService.findAllByAthlete(this.athleteEmail).subscribe(
      list => {
        this.trainingGroups = list; // @ts-ignore
        this.trainingGroups.sort((a, b) => a.name?.localeCompare(b.name));
      });
  }

  public changeTrainingGroup() {
    this.events = []; // @ts-ignore
    if (this.chosenGroup != null && this.chosenGroup != "") {
      this.getEventsByEmail(this.athleteEmail);
    }
  }

}
