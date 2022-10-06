import { TestBed } from "@angular/core/testing";

import { MenuLv2Service } from "./menu-lv2.service";

describe("ProductsService", () => {
  let service: MenuLv2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuLv2Service);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
