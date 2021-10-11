import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordTrainerComponent } from './change-password-trainer.component';

describe('ChangePasswordTrainerComponent', () => {
  let component: ChangePasswordTrainerComponent;
  let fixture: ComponentFixture<ChangePasswordTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordTrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
