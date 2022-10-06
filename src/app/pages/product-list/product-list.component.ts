import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { ProductListService } from "@app/pages/product-list/services/product-list.service";
import { CommonModule, Location } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { ISubsCategory, Product } from "@app/fake_data/category";
import { Observable, pluck, Subscription, switchMap } from "rxjs";
import { tap } from "rxjs/operators";
import { DataService } from "@core/services/dataService/data.service";
import { CartService } from "@app/pages/cart/services/cart.service";

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
  subManager = new Subscription();
  productList: Observable<Product[]>;
  subCategory: Observable<ISubsCategory>;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    public _productListSv: ProductListService,
    public location: Location,
    private cartService: CartService
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

  changeItemInCart($event: Event, item: Product, process = "add") {
    $event.stopPropagation();
    if (process === "remove") {
      return this.cartService.removeItemInCart(item);
    }
    return this.cartService.addItemToCart(item);
  }
}
