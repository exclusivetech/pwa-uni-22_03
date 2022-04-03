import { TestBed } from '@angular/core/testing';

import { JwtTokenAuthService } from './jwt-token.service';

describe('JwtTokenService', () => {
  let service: JwtTokenAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtTokenAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
