import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { data, Product } from "@app/fake_data";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private _data = new BehaviorSubject<Product[]>(data);
  public data = this._data.asObservable();

  constructor() {}

  // sét số lượng item đã chọn = 0 nếu remove item khỏi cart
  setQuantity(item: Product) {
    const value = this._data.value;

    const objectData = value.reduce((object, cur) => {
      object[cur.id] = cur;
      return object;
    }, {} as any);

    objectData[item.id].quantityItemsSelected = 0;
    this._data.next(value);
  }

  asyncCartToData(items: Product[]) {
    const value = this._data.value;

    const objectData = value.reduce((object, cur) => {
      object[cur.id] = cur;

      return object;
    }, {} as any);

    items.forEach((i) => {
      objectData[i.id].quantityItemsSelected = i.quantityItemsSelected;
      this._data.next(value);
    });
  }
}
