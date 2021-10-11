import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTrainerComponent } from './data-trainer.component';

describe('DataTrainerComponent', () => {
  let component: DataTrainerComponent;
  let fixture: ComponentFixture<DataTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
