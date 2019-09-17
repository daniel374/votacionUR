import { TestBed } from '@angular/core/testing';

import { ConsejosService } from './consejos.service';

describe('ConsejosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsejosService = TestBed.get(ConsejosService);
    expect(service).toBeTruthy();
  });
});
