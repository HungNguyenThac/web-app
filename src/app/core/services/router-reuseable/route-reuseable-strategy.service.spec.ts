import { TestBed } from "@angular/core/testing";

import { RouteReusableStrategy } from "./route-reuseable-strategy.service";

describe("RouteReusableStrategy", () => {
  let service: RouteReusableStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteReusableStrategy);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
