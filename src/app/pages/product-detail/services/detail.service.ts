import { Injectable } from "@angular/core";
import { drink_list, IDrinks } from "@app/fake_data/drink_list";
import { BehaviorSubject, filter, Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DetailService {
  private _quantity = new BehaviorSubject(0);
  public quantity = this._quantity as Observable<number>;
  fakeDrinks: Observable<IDrinks[]> = of(drink_list);
  constructor() {}

  queryProduct(param: string) {
    console.log(param);
    return this.fakeDrinks.pipe(
      map((drinks) => drinks.find((drink) => drink.url === param)),
      filter((rs) => !!rs)
    );
  }
  addItemToCart() {
    this._quantity.next(this._quantity.value + 1);
  }
}
