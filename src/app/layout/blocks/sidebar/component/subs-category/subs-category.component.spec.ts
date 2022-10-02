import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SubsCatergoryComponent } from "./subs-catergory.component";

describe("CategoryItemComponent", () => {
  let component: SubsCatergoryComponent;
  let fixture: ComponentFixture<SubsCatergoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubsCatergoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubsCatergoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
