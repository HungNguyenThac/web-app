import { Injectable } from "@angular/core";
import { filter, Observable, of } from "rxjs";
import { category, ICategory, ISubsCategory, Product } from "@app/fake_data/category";
import { map } from "rxjs/operators";
import { DataService } from "@app/core/services/dataService/data.service";

@Injectable()
export class ProductListService {
  categoryList: Observable<ICategory[]> = of(category);
  productList: Observable<Product[]>;

  constructor(private dataService: DataService) {
    this.productList = dataService.data;
  }

  getProductListByParam(param: string) {
    return this.productList.pipe(map((rs) => rs.filter((product) => product.subCategory_url === param)));
  }

  getSubCategory(param: string) {
    return this.categoryList.pipe(
      map((categoryList) =>
        categoryList.reduce((subs, cur) => {
          if (cur.subsCategory) {
            subs = [...subs, ...cur.subsCategory];
            return subs;
          }
          return subs;
        }, [] as ISubsCategory[])
      ),
      map((subs) => {
        const test = subs.find((sub) => sub.url === param);
        if (test) return test;
        return {} as ISubsCategory;
      }),
      filter((rs) => !!rs)
    );
  }
}
