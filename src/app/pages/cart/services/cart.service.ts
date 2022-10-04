import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "@app/fake_data/category";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private _itemsSelected = new BehaviorSubject<Product[]>([]);
  public itemsSelected = this._itemsSelected.asObservable();

  private _cartQuantity = new BehaviorSubject<number>(0);
  public cartQuantity = this._cartQuantity.asObservable();

  constructor() {}

  updateCart(itemsSelected: Product[]) {
    this._itemsSelected.next(itemsSelected);
    this.getQuantity();
  }

  getQuantity() {
    this.itemsSelected
      .pipe(
        map((items) =>
          items.reduce((quantity, cur) => {
            quantity = quantity + cur.quantity;
            return quantity;
          }, 0)
        )
      )
      .subscribe((rs) => this._cartQuantity.next(rs));
  }
}
