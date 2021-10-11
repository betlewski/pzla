import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAthleteComponent } from './edit-athlete.component';

describe('EditAthleteComponent', () => {
  let component: EditAthleteComponent;
  let fixture: ComponentFixture<EditAthleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAthleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
