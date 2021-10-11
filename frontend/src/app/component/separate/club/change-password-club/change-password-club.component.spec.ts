import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordClubComponent } from './change-password-club.component';

describe('ChangePasswordClubComponent', () => {
  let component: ChangePasswordClubComponent;
  let fixture: ComponentFixture<ChangePasswordClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
