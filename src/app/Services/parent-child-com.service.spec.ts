import { TestBed } from '@angular/core/testing';

import { ParentChildComService } from './parent-child-com.service';

describe('ParentChildComService', () => {
  let service: ParentChildComService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentChildComService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
