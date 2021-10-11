import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataClubComponent } from './data-club.component';

describe('DataClubComponent', () => {
  let component: DataClubComponent;
  let fixture: ComponentFixture<DataClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
