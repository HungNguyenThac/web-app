import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { ProductListService } from "@app/pages/product-list/services/product-list.service";
import { CommonModule, Location } from "@angular/common";
import { IDrink } from "@app/fake_data/drink_list";
import { MatButtonModule } from "@angular/material/button";
import { ISubsCategory, Product } from "@app/fake_data/category";
import { Observable, pluck, switchMap } from "rxjs";
import { CartService } from "@app/pages/cart/services/cart.service";
import { IFood, IFruit } from "@app/fake_data";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-product-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
  imports: [MatButtonModule, CommonModule, RouterModule],
  providers: [ProductListService],
})
export class ProductListComponent implements OnInit {
  productList: Observable<Product[]>;
  subCategory: Observable<ISubsCategory>;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    public _productListSv: ProductListService,
    public location: Location,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.subCategory = this._activatedRoute.params.pipe(
      pluck("slug"),
      switchMap((rs) => this._productListSv.getSubCategory(rs)),
      tap((rs) => this.getProductList(rs.url))
    );
  }

  getProductList(param: string) {
    this.productList = this._productListSv.getProductListByParam(param);
  }

  switchToDetail(item: Product) {
    this._router
      .navigate([
        item.category_url + "/" + item.subCategory_url + "/" + item.url,
      ])
      .then();
  }

  addItemToCart($event: Event, item: Product) {
    $event.stopPropagation();
    this.cartService.addItemToCart(item);
  }
}
