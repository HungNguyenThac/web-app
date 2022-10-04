import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { pluck, Subscription, switchMap } from "rxjs";
import { DetailService } from "@app/pages/product-detail/services/detail.service";
import { CommonModule, Location } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { Product } from "@app/fake_data/category";
import { DataService } from "@core/services/dataService/data.service";
import { map, tap } from "rxjs/operators";

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
    public dataService: DataService,
    public location: Location,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.dataService.data
      .pipe(
        switchMap((data) => {
          return this._activatedRoute.params.pipe(
            pluck("slug"),
            map((rs) => data.find((item) => item.url === rs))
          );
        })
      )
      .subscribe((rs) => (this.product = rs));
  }
}
