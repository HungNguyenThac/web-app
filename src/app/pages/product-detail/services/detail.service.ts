import { Injectable } from "@angular/core";
import { drink_list, IDrink } from "@app/fake_data/drink_list";
import { filter, Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { DataService } from "@core/services/dataService/data.service";

@Injectable({
  providedIn: "root",
})
export class DetailService {
  fakeDrinks: Observable<IDrink[]> = of(drink_list);
  constructor(private dataService: DataService) {}

  queryProduct(param: string) {
    return this.fakeDrinks.pipe(
      map((drinks) => drinks.find((drink) => drink.url === param)),
      filter((rs) => !!rs)
    );
  }
}
