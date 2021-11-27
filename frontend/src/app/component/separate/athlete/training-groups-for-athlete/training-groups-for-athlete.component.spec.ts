import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingGroupsForAthleteComponent } from './training-groups-for-athlete.component';

describe('TrainingGroupsForAthleteComponent', () => {
  let component: TrainingGroupsForAthleteComponent;
  let fixture: ComponentFixture<TrainingGroupsForAthleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingGroupsForAthleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingGroupsForAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
