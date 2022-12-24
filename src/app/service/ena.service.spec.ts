import { TestBed } from '@angular/core/testing';

import { EnaService } from './ena.service';

describe('EnaService', () => {
  let service: EnaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
