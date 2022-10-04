import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { data, Product } from "@app/fake_data";
import { commonUtils } from "@core/utils";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private _data = new BehaviorSubject<Product[]>(data);
  public data = this._data.asObservable();
  constructor() {}

  updateData(item: Product, process = "remove") {
    const arrayData = this._data.value;
    const objectData = commonUtils.convertArrayToObjectByID(arrayData);
    if (process === "add") this.incrementQuantity(arrayData, objectData);
  }

  incrementQuantity(array: Product[], object: any) {}

  decrementQuantity(array: Product[], object: any) {}
}
