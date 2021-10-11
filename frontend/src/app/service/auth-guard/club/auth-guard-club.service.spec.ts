import { TestBed } from '@angular/core/testing';

import { AuthGuardClubService } from './auth-guard-club.service';

describe('AuthGuardClubService', () => {
  let service: AuthGuardClubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardClubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
