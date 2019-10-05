import { TestBed } from '@angular/core/testing';

import { RegisVotoService } from './regis-voto.service';

describe('RegisVotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisVotoService = TestBed.get(RegisVotoService);
    expect(service).toBeTruthy();
  });
});
