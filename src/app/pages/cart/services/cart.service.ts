import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "@app/fake_data/category";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private _itemsSelected = new BehaviorSubject<Product[]>([]);
  public itemsSelected = this._itemsSelected.asObservable();
  public quantity: Observable<number>;
  private newItemsSelected: Product[];
  constructor() {}

  addItemToCart(item: Product) {
    if (!this._itemsSelected.value.length) {
      item.quantity = 1;
      return this._itemsSelected.next([item]);
    }

    const value = this._itemsSelected.value;

    const newCart = value.reduce((product, cur) => {
      product[cur.id] = cur;
      return product;
    }, {} as any) as Product[];

    if (!newCart[item.id]) {
      item.quantity = 1;
      return this._itemsSelected.next([...value, item]);
    }
    newCart[item.id].quantity = newCart[item.id].quantity + 1;
    this._itemsSelected.next([...value]);
  }

  getQuantity() {
    return this.itemsSelected.pipe(
      map((items) =>
        items.reduce((quantity, cur) => {
          quantity = quantity + cur.quantity;
          return quantity;
        }, 0)
      )
    );
  }
}
