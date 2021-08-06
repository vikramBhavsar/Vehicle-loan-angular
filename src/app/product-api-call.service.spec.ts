import { TestBed } from '@angular/core/testing';

import { ProductApiCallService } from './product-api-call.service';

describe('ProductApiCallService', () => {
  let service: ProductApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
