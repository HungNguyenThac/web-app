import { Injectable, OnInit } from "@angular/core";
import { category, ICategory } from "@app/fake_data/category";
import { filter, Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class MenuLv2Service implements OnInit {
  category: Observable<ICategory[]> = of(category);

  constructor() {}

  ngOnInit(): void {}

  getSubsCategory(param: string) {
    return this.category.pipe(
      map((categoryList) => {
        const test = categoryList.find((category) => category.url === param);
        if (test) return test;
        return {} as ICategory;
      }),
      filter((rs) => !!rs)
    );
  }
}
