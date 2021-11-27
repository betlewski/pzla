import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDataForAthleteComponent } from './club-data-for-athlete.component';

describe('ClubDataForAthleteComponent', () => {
  let component: ClubDataForAthleteComponent;
  let fixture: ComponentFixture<ClubDataForAthleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubDataForAthleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubDataForAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
