import { Injectable, OnInit } from "@angular/core";
import { category, ICategory } from "@app/fake_data/category";
import { filter, Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ProductsLv2Service implements OnInit {
  category: Observable<ICategory[]> = of(category);

  constructor() {}

  ngOnInit(): void {}

  getSubsCategory(param: string) {
    return this.category.pipe(
      map((categoryList) =>
        categoryList.find((category) => category.url === param)
      ),
      filter((rs) => !!rs)
    );
  }
}
