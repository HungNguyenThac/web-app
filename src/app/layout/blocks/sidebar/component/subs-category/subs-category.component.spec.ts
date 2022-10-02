import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SubsCategoryComponent } from "./subs-category.component";

describe("CategoryItemComponent", () => {
  let component: SubsCategoryComponent;
  let fixture: ComponentFixture<SubsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubsCategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
