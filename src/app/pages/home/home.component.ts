import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { category, ICategory, Product } from "@app/fake_data/category";
import { CartService } from "@app/pages/cart/services/cart.service";
import { drink_list, food_list, fruit_list } from "@app/fake_data";

export interface List {
  [index: number]: Product;
}

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  imports: [CommonModule, MatButtonModule, RouterModule],
})
export class HomeComponent implements OnInit {
  categoryList: ICategory[] = category;
  productList: Product[];

  constructor(public cartService: CartService) {
    this.productList = [...drink_list, ...food_list, ...fruit_list];
  }

  ngOnInit(): void {
    const newProductList = this.productList.reduce((product, cur) => {
      if (!product[cur.category_id]) {
        product[cur.category_id] = [];
      }
      product[cur.category_id].push(cur);
      return product;
    }, {} as any);

    this.categoryList.forEach((category) => {
      category.productList = newProductList[category.id];
    });
  }

  addItemToCart($event: Event, item: Product) {
    $event.stopPropagation();
    this.cartService.addItemToCart(item);
  }
}
