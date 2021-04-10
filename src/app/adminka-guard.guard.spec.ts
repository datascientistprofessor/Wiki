import { TestBed } from '@angular/core/testing';

import { AdminkaGuardGuard } from './adminka-guard.guard';

describe('AdminkaGuardGuard', () => {
  let guard: AdminkaGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminkaGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
