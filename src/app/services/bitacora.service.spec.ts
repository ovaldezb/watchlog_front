import { TestBed } from '@angular/core/testing';

import { BitacoraService } from './bitacora.service';

describe('BitacoraService', () => {
  let service: BitacoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitacoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
