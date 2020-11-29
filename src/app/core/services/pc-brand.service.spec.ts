import { TestBed } from '@angular/core/testing';

import { PcBrandService } from './pc-brand.service';

describe('PcBrandService', () => {
  let service: PcBrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcBrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
