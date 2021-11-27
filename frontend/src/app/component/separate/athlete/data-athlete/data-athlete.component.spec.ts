import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAthleteComponent } from './data-athlete.component';

describe('DataAthleteComponent', () => {
  let component: DataAthleteComponent;
  let fixture: ComponentFixture<DataAthleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAthleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
