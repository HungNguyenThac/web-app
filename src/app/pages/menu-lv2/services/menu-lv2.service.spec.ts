import { TestBed } from "@angular/core/testing";

import { ProductsLv2Service } from "./products-lv2.service";

describe("ProductsService", () => {
  let service: ProductsLv2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsLv2Service);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
