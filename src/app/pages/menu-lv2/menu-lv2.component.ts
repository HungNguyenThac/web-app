import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ICategory } from "@app/fake_data/category";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { pluck, switchMap } from "rxjs";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { ProductsLv2Service } from "@app/pages/products-lv2/services/products-lv2.service";

@Component({
  selector: "app-products-lv2-lv2",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./products-lv2.component.html",
  styles: [],
  imports: [RouterModule, CommonModule, MatButtonModule],
  providers: [ProductsLv2Service],
})
export class ProductsLv2Component implements OnInit {
  data: ICategory;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productSv: ProductsLv2Service,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        pluck("products-lv2-lv2"),
        switchMap((rs) => this.productSv.getSubsCategory(rs))
      )
      .subscribe((rs) => (this.data = rs));
  }

  switchToDetail(url: string) {
    this.router.navigate([this.data.url + "/" + url]);
  }
}
