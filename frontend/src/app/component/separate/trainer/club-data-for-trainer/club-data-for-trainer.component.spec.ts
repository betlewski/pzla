import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDataForTrainerComponent } from './club-data-for-trainer.component';

describe('ClubDataForTrainerComponent', () => {
  let component: ClubDataForTrainerComponent;
  let fixture: ComponentFixture<ClubDataForTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubDataForTrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubDataForTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
