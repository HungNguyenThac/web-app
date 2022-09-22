import { TestBed } from '@angular/core/testing';

import { RouteReuseableStrategyService } from './route-reuseable-strategy.service';

describe('RouteReuseableStrategyService', () => {
  let service: RouteReuseableStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteReuseableStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
