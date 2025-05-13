import { TestBed } from '@angular/core/testing';

import { PoblacionesService } from './poblaciones.service';

describe('ProvinciasService', () => {
  let service: PoblacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoblacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
