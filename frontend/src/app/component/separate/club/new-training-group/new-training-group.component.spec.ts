import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrainingGroupComponent } from './new-training-group.component';

describe('NewTrainingGroupComponent', () => {
  let component: NewTrainingGroupComponent;
  let fixture: ComponentFixture<NewTrainingGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTrainingGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrainingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
