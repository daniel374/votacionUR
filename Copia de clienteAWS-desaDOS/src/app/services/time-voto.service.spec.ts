import { TestBed } from '@angular/core/testing';

import { TimeVotoService } from './time-voto.service';

describe('TimeVotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeVotoService = TestBed.get(TimeVotoService);
    expect(service).toBeTruthy();
  });
});
