import {Component, ChangeDetectionStrategy, ViewChild, TemplateRef} from '@angular/core';
import {CalendarEvent, CalendarView,} from 'angular-calendar';
import {isSameDay, isSameMonth, parseISO} from 'date-fns';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from "../../../service/auth/auth.service";
import {EmployeeService} from "../../../service/rest/employee/employee.service";
import {StudentService} from "../../../service/rest/student/student.service";
import {TrainingGroupService} from "../../../service/rest/training-group/training-group.service";
import {TrainingService} from "../../../service/rest/training/training.service";
import {SessionType} from "../../../utils/session-type";
import {Training} from "../../../model/training";
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap/modal/modal-ref";

export const colors: any = {
  yellow: {
    primary: '#edbe00',
    secondary: '#fff4ba',
  },
  green: {
    primary: '#00cc00',
    secondary: '#ccffcc',
  },
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  grey: {
    primary: '#cfcfcf',
    secondary: '#efefef',
  },
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * Szablon kalendarza stosowany w panelach różnych użytkowników.
 */
export class CalendarComponent {

  /**
   * Zmienne i metody oryginalne wykorzystywane w specyfice działania kalendarza:
   */
  public constructor(private modal: NgbModal,
                     protected authService: AuthService,
                     protected employeeService: EmployeeService,
                     protected studentService: StudentService,
                     protected trainingGroupService: TrainingGroupService,
                     protected trainingService: TrainingService) {
  }

  @ViewChild('eventContent', {static: true}) eventContent: TemplateRef<any> | undefined;
  @ViewChild('newContent', {static: true}) newContent: TemplateRef<any> | undefined;

  CalendarView = CalendarView;
  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = true;
  todayOpened: boolean = true;
  events: CalendarEvent[] = [];
  event: CalendarEvent | undefined;
  modalRef: NgbModalRef | undefined;

  dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.activeDayIsOpen = !((isSameDay(this.viewDate, date) && this.activeDayIsOpen) || events.length === 0);
      this.viewDate = date;
    }
  }

  handleEvent(event: CalendarEvent): void {
    this.event = event;
    if (event.allDay == true) {
      this.modalRef = this.modal.open(this.newContent, {size: "lg", centered: true});
    } else {
      this.modalRef = this.modal.open(this.eventContent, {size: "lg", centered: true});
    }
  }

  closeEventView(): void {
    this.modalRef?.close();
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
    this.todayOpened = false;
  }

  openToday() {
    this.todayOpened = true;
  }

  /**
   * Zmienne i metody wykorzystywane podczas pobierania wydarzeń do wyświetlenia:
   */
  private trainingColor = colors.yellow;
  private newTrainingColor = colors.grey;

  protected getAllEventsForAthletes(emails: string[]) {
    this.getNewEventsForAthletes(emails);
    emails.forEach(email => this.getEventsByEmail(email));
  }

  protected getAllEventsForAthlete(email: string) {
    this.getNewEventsForAthletes([email]);
    this.getEventsByEmail(email);
  }

  private getNewEventsForAthletes(emails: string[]): void {
    const now = new Date(new Date().setDate(new Date().getDate() + 1));
    const end = new Date(new Date().setDate(new Date().getDate() + 14));
    for (let date = now; date <= end; date.setDate(date.getDate() + 1)) {
      // @ts-ignore
      this.events = [
        ...this.events,
        {
          title: "Nowy trening",
          start: new Date(date),
          end: new Date(date),
          athlete: emails,
          color: this.newTrainingColor,
          allDay: true,
        }
      ];
    }
  }

  protected getEventsByEmail(email: string): void {
    this.trainingService.findAllByAthlete(email)
      .subscribe(trainings => {
        trainings.forEach(training => {
          const startTime = training.startTime != null ? training.startTime : "";
          const endTime = training.endTime != null ? training.endTime : ""; // @ts-ignore
          this.events = [
            ...this.events,
            {
              title: this.getEventTitleFromTraining(training),
              start: parseISO(startTime.toString()),
              end: parseISO(endTime.toString()),
              color: this.trainingColor,
              athlete: email,
              sessionType: SessionType.translate(training.sessionType),
              description: training.description,
              athletePresence: training.athletePresence,
              completing: training.completing,
              athleteFeelings: training.athleteFeelings
            }
          ];
        });
      });
  }

  protected getEventTitleFromTraining(training: Training): string {
    return SessionType.translate(training.sessionType) + " | " + training.description;
  }

}
