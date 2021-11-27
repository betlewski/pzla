import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarAthleteComponent } from './calendar-athlete.component';

describe('CalendarAthleteComponent', () => {
  let component: CalendarAthleteComponent;
  let fixture: ComponentFixture<CalendarAthleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarAthleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
