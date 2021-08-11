import { TestBed } from '@angular/core/testing';

import { ClientdetailServiceService } from './clientdetail-service.service';

describe('ClientdetailServiceService', () => {
  let service: ClientdetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientdetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
