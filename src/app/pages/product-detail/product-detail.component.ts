import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { pluck, Subscription, switchMap } from "rxjs";
import { DetailService } from "@app/pages/product-detail/services/detail.service";
import { IDrinks } from "@app/fake_data/drink_list";
import { CommonModule, Location } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";

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
  product: IDrinks;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _detailSv: DetailService,
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
  order() {
    this._detailSv.addItemToCart();
  }
}
