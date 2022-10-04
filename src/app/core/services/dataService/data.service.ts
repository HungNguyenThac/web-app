import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { data, Product } from "@app/fake_data";
import { CartService } from "@app/pages/cart/services/cart.service";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private _data = new BehaviorSubject<Product[]>(data);
  public data = this._data.asObservable();

  constructor(private cartService: CartService) {}

  updateQuantity(item: Product, process = "add") {
    const arrayData = this._data.value;
    const objectData = arrayData.reduce((object, cur) => {
      object[cur.id] = cur;
      return object;
    }, {} as any);

    if (process === "remove") {
      return this.decrementQuantity(arrayData, item, objectData);
    }
    return this.incrementQuantity(arrayData, item, objectData);
  }

  incrementQuantity(array: Product[], item: Product, object: any) {
    object[item.id].quantity = object[item.id].quantity + 1;
    this._data.next(array);
    this.cartService.updateCart(
      array.filter((product) => product.quantity > 0)
    );
  }

  decrementQuantity(array: Product[], item: Product, object: any) {
    object[item.id].quantity === 0
      ? (object[item.id].quantity = 0)
      : (object[item.id].quantity = object[item.id].quantity - 1);
    this._data.next(array);
    this.cartService.updateCart(
      array.filter((product) => product.quantity > 0)
    );
  }
}
