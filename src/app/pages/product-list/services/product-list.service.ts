import { Injectable } from "@angular/core";
import { filter, Observable, of } from "rxjs";
import {
  category,
  ICategory,
  ISubsCategory,
  Product,
} from "@app/fake_data/category";
import { map } from "rxjs/operators";
import { drink_list, food_list, fruit_list } from "@app/fake_data";

@Injectable()
export class ProductListService {
  categoryList: Observable<ICategory[]> = of(category);
  subCategory: Observable<ISubsCategory>;
  productList: Observable<Product[]>;

  constructor() {
    this.productList = of([...drink_list, ...food_list, ...fruit_list]);
  }

  getProductListByParam(param: string) {
    return this.productList.pipe(
      map((rs) => rs.filter((product) => product.subCategory_url === param))
    );
  }

  getSubCategory(param: string) {
    return this.categoryList.pipe(
      map((categoryList) =>
        categoryList.reduce((subs, cur) => {
          subs = [...subs, ...cur.subsCategory];
          return subs;
        }, [])
      ),
      map((subs) => subs.find((sub) => sub.url === param)),
      filter((rs) => !!rs)
    );
  }
}
