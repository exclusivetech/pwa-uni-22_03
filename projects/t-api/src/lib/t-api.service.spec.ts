import { TestBed } from '@angular/core/testing';

import { TApiService } from './t-api.service';

describe('TApiService', () => {
  let service: TApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
