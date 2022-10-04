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

  addItemToCart(item: Product) {
    if (!this._itemsSelected.value.length) {
      item.quantity = 1;
      this._itemsSelected.next([item]);
      this.getQuantity();
      return;
    }
    const arrayItemsSelected = this._itemsSelected.value;

    const newCart = this.convertArrayToObject(arrayItemsSelected);

    if (!newCart[item.id]) {
      item.quantity = 1;
      this._itemsSelected.next([...arrayItemsSelected, item]);
      this.getQuantity();
      return;
    }

    newCart[item.id].quantity = newCart[item.id].quantity + 1;
    this._itemsSelected.next([...arrayItemsSelected]);
    this.getQuantity();
  }

  removeItemInCart(item: Product) {
    if (!this._itemsSelected.value.length) return;

    const arrayItemsSelected = this._itemsSelected.value;

    const newCart = this.convertArrayToObject(arrayItemsSelected);

    if (newCart[item.id].quantity === 1) {
      const newValue = arrayItemsSelected.filter(
        (itemSelected) => itemSelected.id !== item.id
      );
      this._itemsSelected.next(newValue);
      this.getQuantity();
      return;
    }

    newCart[item.id].quantity = newCart[item.id].quantity - 1;
    this._itemsSelected.next([...arrayItemsSelected]);
    this.getQuantity();
  }

  convertArrayToObject(arrayItemSelected: Product[]) {
    return arrayItemSelected.reduce((product, cur) => {
      product[cur.id] = cur;
      return product;
    }, {} as any) as Product[];
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
