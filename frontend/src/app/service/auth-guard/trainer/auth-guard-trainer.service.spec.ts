import { TestBed } from '@angular/core/testing';

import { AuthGuardTrainerService } from './auth-guard-trainer.service';

describe('AuthGuardTrainerService', () => {
  let service: AuthGuardTrainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardTrainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
