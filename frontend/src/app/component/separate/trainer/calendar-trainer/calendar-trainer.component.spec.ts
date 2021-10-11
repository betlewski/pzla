import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarTrainerComponent } from './calendar-trainer.component';

describe('CalendarTrainerComponent', () => {
  let component: CalendarTrainerComponent;
  let fixture: ComponentFixture<CalendarTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarTrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
