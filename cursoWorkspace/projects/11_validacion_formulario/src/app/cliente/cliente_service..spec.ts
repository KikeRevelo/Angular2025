import { TestBed } from '@angular/core/testing';

import { ClienteServiceService } from './cliente_service';

describe('ClienteServiceService', () => {
  let service: ClienteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
