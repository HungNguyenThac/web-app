import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "@app/fake_data/category";
import { map } from "rxjs/operators";

export type typeAdd = "default" | "custom";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private _itemsSelected = new BehaviorSubject<Product[]>([]);
  public itemsSelected = this._itemsSelected.asObservable();

  private _cartQuantity = new BehaviorSubject<number>(0);
  public cartQuantity = this._cartQuantity.asObservable();

  constructor() {}

  /**
   *------------tăng------------ dựa trên sizeSelected
   *
   * nếu sizeSelected = true,
   * thì kiểm tra sizeSelected === sizeDefault hay không
   *
   * nếu bằng ===> thêm sản phẩm như bình thường, tìm trong cart đa có sản phẩm với id này chưa, chưa thì thêm mới,
   * rồi thì tăng quantity
   *
   * không bằng ===> kiểm tra đã có sản phẩm tương tự có cùng id và size chưa, có rồi thì tăng quantity,
   * chưa có thi tạo mới
   *
   *
   * ---------giảm --------------- dựa trên sizeSelected
   * sizeSelected = false, tìm trong cart đã có item với id tương tự hay chưa, có rồi thì giảm quantity
   * sizeSelected = true, tìm trong cart đã có item với id và size tương tự, giảm quantity
   *
   *
   */

  // updateCart(itemsSelected: Product[]) {
  //   this._itemsSelected.next(itemsSelected);
  //   this.getQuantity();
  // }

  addItemToCart(item: Product) {
    const value = this._itemsSelected.value;
    if (!item.sizeSelected) item.sizeSelected = item.defaultSize;

    if (!value.length) {
      item.quantity++;
      this._itemsSelected.next([item]);
      return;
    }

    const objectValue = value.reduce((object, cur) => {
      object[cur.id] = cur;
      return object;
    }, {} as any);

    if (item.sizeSelected === item.defaultSize) {
      if (objectValue[item.id]) {
        objectValue[item.id].quantity++;
        this._itemsSelected.next([...value]);
        return;
      }
      item.quantity++;
      this._itemsSelected.next([...value, item]);
      return;
    }

    const test = value.find(
      (i) => i.id === item.id && i.sizeSelected === item.sizeSelected
    );

    if (test) {
      objectValue[item.id].quantity++;
      this._itemsSelected.next([...value]);
      return;
    }

    this._itemsSelected.next([...value, item]);
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
