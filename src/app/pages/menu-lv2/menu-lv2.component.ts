import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { ICategory, Product } from "@app/fake_data/category";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { pluck, Subscription, switchMap } from "rxjs";
import { CommonModule, Location } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MenuLv2Service } from "@app/pages/menu-lv2/services/menu-lv2.service";
import { DataService } from "@core/services/dataService/data.service";

@Component({
  selector: "app-menu-lv2-lv2",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./menu-lv2.component.html",
  styles: [
    `
      .item-menulv2 {
        transition: all 0.25s ease-in-out;
        &:hover {
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
      }
    `,
  ],
  imports: [RouterModule, CommonModule, MatButtonModule],
  providers: [MenuLv2Service],
})
export class MenuLv2Component implements OnInit, OnDestroy {
  subManager = new Subscription();
  category!: ICategory;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productSv: MenuLv2Service,
    private _router: Router,
    public location: Location
  ) {}

  ngOnInit(): void {
    this.subManager.add(
      this._activatedRoute.params
        .pipe(
          pluck("slug"),
          switchMap((rs) => this._productSv.getSubsCategory(rs))
        )
        .subscribe((rs) => (this.category = rs))
    );
  }

  switchToProductListPage(url: string) {
    if (this.category) this._router.navigate([this.category.url + "/" + url]).then();
  }

  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  changeItemInCart($event: Event, item: Product, process = "add") {
    $event.stopPropagation();
    if (process === "remove") {
      // return this.dataService.updateQuantity(item, "remove");
    }
    // this.dataService.updateQuantity(item);
  }
}
