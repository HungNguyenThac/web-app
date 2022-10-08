import { Injectable } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";
import { Product } from "@app/fake_data/category";
import { map } from "rxjs/operators";
import { DataService } from "@core/services/dataService/data.service";

@Injectable({
  providedIn: "root",
})
export class CartService {
  subManager = new Subscription();
  private _itemsSelected = new BehaviorSubject<Product[]>([]);
  public itemsSelected = this._itemsSelected.asObservable();

  private _cartQuantity = new BehaviorSubject<number>(0);
  public cartQuantity = this._cartQuantity.asObservable();

  constructor(private dataService: DataService) {}

  increaseItemToCart(item: Product) {
    const value = this._itemsSelected.value;

    const test = value.filter((i) => i.id === item.id);

    if (test.length === 0) {
      item.quantityItemsSelected = 1;
      this._itemsSelected.next([...value, item]);
      this.dataService.asyncCartToData(this._itemsSelected.value);
      this.getQuantity();
      return;
    }

    const test2 = test.find((i) => JSON.stringify(i.optionSelected) === JSON.stringify(item.optionSelected));
    if (test2) {
      item.quantityItemsSelected = item.quantityItemsSelected + 1;
      const test3 = value.filter((i) => i.id !== item.id);
      this._itemsSelected.next([...test3, item]);
      this.dataService.asyncCartToData(this._itemsSelected.value);
      this.getQuantity();
      return;
    }
  }

  decreaseItemInCart(item: Product) {
    console.log(item);
    const value = this._itemsSelected.value;

    const deleteItem = () => {
      const test = value.find(
        (i) => i.id === item.id && JSON.stringify(i.optionSelected) === JSON.stringify(item.optionSelected)
      );

      if (!test) return;

      const test2 = value.filter((i) => {
        if (i.optionSelected.length > 0) {
          return i.id !== test.id && JSON.stringify(item.optionSelected) !== JSON.stringify(i.optionSelected);
        }
        return i.id !== test.id;
      });

      if (test && test.quantityItemsSelected === 1) {
        this._itemsSelected.next(test2);
        this.dataService.asyncCartToData(this._itemsSelected.value);
        this.dataService.setQuantity(item);
        this.getQuantity();
        return;
      }

      test.quantityItemsSelected -= 1;
      this._itemsSelected.next([...test2, test]);
      this.dataService.asyncCartToData(this._itemsSelected.value);
      this.getQuantity();
    };

    if (item.optionSelected.length === 0) {
      return deleteItem();
    }
    deleteItem();
  }

  getQuantity() {
    this.subManager.add(
      this.itemsSelected
        .pipe(
          map((items) =>
            items.reduce((quantity, cur) => {
              quantity = quantity + cur.quantityItemsSelected;
              return quantity;
            }, 0)
          )
        )
        .subscribe((rs) => this._cartQuantity.next(rs))
    );

    this.subManager.unsubscribe();
  }
}
