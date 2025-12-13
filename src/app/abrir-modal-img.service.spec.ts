import { TestBed } from '@angular/core/testing';

import { AbrirModalImgService } from './abrir-modal-img.service';

describe('AbrirModalImgService', () => {
  let service: AbrirModalImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbrirModalImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
