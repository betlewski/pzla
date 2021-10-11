import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainingGroupComponent } from './edit-training-group.component';

describe('EditTrainingGroupComponent', () => {
  let component: EditTrainingGroupComponent;
  let fixture: ComponentFixture<EditTrainingGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTrainingGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrainingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
