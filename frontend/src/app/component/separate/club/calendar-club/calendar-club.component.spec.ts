import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarClubComponent } from './calendar-club.component';

describe('CalendarClubComponent', () => {
  let component: CalendarClubComponent;
  let fixture: ComponentFixture<CalendarClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
