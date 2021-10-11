import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingGroupsForTrainerComponent } from './training-groups-for-trainer.component';

describe('TrainingGroupsForTrainerComponent', () => {
  let component: TrainingGroupsForTrainerComponent;
  let fixture: ComponentFixture<TrainingGroupsForTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingGroupsForTrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingGroupsForTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
