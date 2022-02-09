import { TestBed } from '@angular/core/testing';

import { Harrypotter1Service } from './harrypotter1.service';

describe('Harrypotter1Service', () => {
  let service: Harrypotter1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Harrypotter1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
