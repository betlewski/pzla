import { TestBed } from '@angular/core/testing';

import { AuthGuardAthleteService } from './auth-guard-athlete.service';

describe('AuthGuardAthleteService', () => {
  let service: AuthGuardAthleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardAthleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
