import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule, Location } from "@angular/common";
import { CartService } from "@app/pages/cart/services/cart.service";
import { Product } from "@app/fake_data";
import { DataService } from "@core/services/dataService/data.service";
import { Router, RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { config } from "@core/common/constants/config";
import { EnumTypeConfirm } from "@core/common/enum";
import { ConfirmComponent } from "@app/share/components";

@Component({
  selector: "app-cart",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
  imports: [MatButtonModule, RouterModule, CommonModule, TranslateModule, MatDialogModule],
})
export class CartComponent implements OnInit {
  constructor(
    public location: Location,
    public cartService: CartService,
    private dataService: DataService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  changeItemInCart($event: Event, item: Product, process = "add") {
    $event.stopPropagation();
    if (process === "remove") {
      if (item.quantityItemsSelected === 1) {
        return this.confirmDeleteItem(item);
      }

      return this.cartService.decreaseItemInCart(item);
    }
    return this.cartService.increaseItemToCart(item);
  }

  confirmDeleteItem(item: Product) {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: config.DIALOG_SIZE_XS,
      data: {
        type: EnumTypeConfirm.CART,
      },
    });
    dialog.afterClosed().subscribe((rs) => {
      if (rs === EnumTypeConfirm.CART) {
        // return this.dataService.updateQuantity(item, "remove");
      }
    });
  }

  switchToDetail(item: Product) {
    this.router.navigate([item.category_url + "/" + item.subCategory_url + "/" + item.url]).then();
  }
}
