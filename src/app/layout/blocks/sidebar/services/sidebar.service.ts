import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { category, ICategory } from "@app/fake_data/category";

@Injectable({
  providedIn: "root",
})
export class SidebarService {
  fakeCategory: Observable<ICategory[]> = of<ICategory[]>(category);

  constructor() {}
}
