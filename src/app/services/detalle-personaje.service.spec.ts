import { TestBed } from '@angular/core/testing';

import { DetallePersonajeService } from './detalle-personaje.service';

describe('DetallePersonajeService', () => {
  let service: DetallePersonajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallePersonajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
