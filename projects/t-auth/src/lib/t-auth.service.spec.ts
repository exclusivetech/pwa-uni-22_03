import { TestBed } from '@angular/core/testing';

import { TAuthService } from './t-auth.service';

describe('TAuthService', () => {
  let service: TAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
