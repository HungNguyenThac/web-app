import { TestBed } from "@angular/core/testing";

import { TemplatePageTitleStrategy } from "./set-browser-title.service";

describe("TemplatePageTitleStrategy", () => {
  let service: TemplatePageTitleStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplatePageTitleStrategy);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
