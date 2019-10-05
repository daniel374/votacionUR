import { TestBed } from '@angular/core/testing';

import { DatosComponentService } from './datos-component.service';

describe('DatosComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosComponentService = TestBed.get(DatosComponentService);
    expect(service).toBeTruthy();
  });
});
