import {Component, OnInit} from '@angular/core';
import {CalendarComponent} from "../../../common/calendar/calendar.component";
import {TrainingGroup} from "../../../../model/training-group.model";
import {Athlete} from "../../../../model/athlete.model";
import {SessionType} from "../../../../utils/session-type";
import {Training} from "../../../../model/training";

@Component({
  selector: 'app-calendar-trainer',
  templateUrl: './calendar-trainer.component.html',
  styleUrls: ['./calendar-trainer.component.css']
})
export class CalendarTrainerComponent extends CalendarComponent implements OnInit {

  trainingGroups: TrainingGroup[] = [];
  chosenGroup: TrainingGroup | null = null;
  athletes: Athlete[] = [];
  chosenAthlete: Athlete | null = null;

  sessionTypes: SessionType[] = SessionType.values();
  sessionUtils = SessionType;

  description: string | null = null;
  sessionType: string | null = null;
  startTime: string | null = null;
  endTime: string | null = null;

  ngOnInit(): void {
    this.findAllTrainingGroups();
  }

  private findAllTrainingGroups() {
    const email = this.authService.getUserEmail();
    this.trainingGroupService.findAllByTrainer(email).subscribe(
      list => {
        this.trainingGroups = list; // @ts-ignore
        this.trainingGroups.sort((a, b) => a.name?.localeCompare(b.name));
      });
  }

  public changeTrainingGroup() {
    this.events = [];
    this.chosenAthlete = null;
    this.athletes = this.chosenGroup == null || this.chosenGroup.athletes == null ?
      [] : this.chosenGroup.athletes;
  }

  public changeAthlete() {
    this.events = []; // @ts-ignore
    if (this.chosenAthlete == "all") {
      const emails = this.chosenGroup?.athletes?.map(athlete => athlete.email); // @ts-ignore
      this.getAllEventsForAthletes(emails);
    } // @ts-ignore
    else if (this.chosenAthlete != null && this.chosenAthlete != "") { // @ts-ignore
      this.getAllEventsForAthlete(this.chosenAthlete.email);
    }
  }

  public saveTraining(date: Date | undefined): void {
    if (this.checkData()) { // @ts-ignore
      const dateString = date.toISOString().split('T')[0];
      const startTime = dateString + 'T' + this.startTime;
      const endTime = dateString + 'T' + this.endTime; // @ts-ignore
      const training = Training.register(startTime, endTime, SessionType[this.sessionType], this.description); // @ts-ignore
      if (this.chosenAthlete == "all") {
        const emails = this.chosenGroup?.athletes?.map(athlete => athlete.email); // @ts-ignore
        this.trainingService.addToAll(training, emails)
          .subscribe(() => this.doAfterSaveTraining());
      } else { // @ts-ignore
        this.trainingService.add(training, this.chosenAthlete?.email)
          .subscribe(() => this.doAfterSaveTraining());
      }
    }
  }

  private checkData(): boolean {
    return this.description != null && this.sessionType != null
      && this.startTime != null && this.endTime != null && this.endTime > this.startTime;
  }

  private doAfterSaveTraining(): void {
    this.changeAthlete();
    this.closeEventView();
    this.cleanFormData();
  }

  private cleanFormData(): void {
    this.description = null;
    this.sessionType = null;
    this.startTime = null;
    this.endTime = null;
  }

}
