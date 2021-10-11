import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainingGroupsForTrainerComponent } from './edit-training-groups-for-trainer.component';

describe('EditTrainingGroupsForTrainerComponent', () => {
  let component: EditTrainingGroupsForTrainerComponent;
  let fixture: ComponentFixture<EditTrainingGroupsForTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTrainingGroupsForTrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrainingGroupsForTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
