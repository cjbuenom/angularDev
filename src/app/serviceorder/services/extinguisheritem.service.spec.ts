import { TestBed } from '@angular/core/testing';

import { ExtinguisheritemService } from './extinguisheritem.service';

describe('ExtinguisheritemService', () => {
  let service: ExtinguisheritemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtinguisheritemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
