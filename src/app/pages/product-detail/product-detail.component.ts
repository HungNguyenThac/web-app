import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { pluck, Subscription, switchMap } from "rxjs";
import { DetailService } from "@app/pages/product-detail/services/detail.service";
import { CommonModule, Location } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { Product } from "@app/fake_data/category";
import { CartService } from "@app/pages/cart/services/cart.service";

@Component({
  selector: "app-product-detail",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
  imports: [CommonModule, RouterModule, MatButtonModule],
})
export class ProductDetailComponent implements OnInit {
  subManager = new Subscription();
  product: Product;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _detailSv: DetailService,
    public cartService: CartService,
    public location: Location,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.subManager.add(
      this._activatedRoute.params
        .pipe(
          pluck("slug"),
          switchMap((rs) => this._detailSv.queryProduct(rs))
        )
        .subscribe((rs) => (this.product = rs))
    );
  }
}
