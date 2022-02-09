import { TestBed } from '@angular/core/testing';

import { GameofthroneService } from './gameofthrone.service';

describe('GameofthroneService', () => {
  let service: GameofthroneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameofthroneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
