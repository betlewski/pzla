import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordAthleteComponent } from './change-password-athlete.component';

describe('ChangePasswordAthleteComponent', () => {
  let component: ChangePasswordAthleteComponent;
  let fixture: ComponentFixture<ChangePasswordAthleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordAthleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
