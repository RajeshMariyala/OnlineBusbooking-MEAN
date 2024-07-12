import { TestBed } from '@angular/core/testing';

import { BuslistService } from './buslist.service';

describe('BuslistService', () => {
  let service: BuslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
