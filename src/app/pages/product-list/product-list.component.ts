import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { ProductListService } from "@app/pages/product-list/services/product-list.service";
import { CommonModule, Location } from "@angular/common";
import { drink_list, IDrinks } from "@app/fake_data/drink_list";
import { MatButtonModule } from "@angular/material/button";

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
  productList: IDrinks[] = drink_list;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _menulv3Sv: ProductListService,
    public location: Location
  ) {}

  ngOnInit(): void {}

  switchToDetail(url: string) {
    this._router.navigate([this._router.url + "/" + url]).then();
  }
}
