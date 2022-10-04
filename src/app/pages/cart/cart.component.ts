import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule, Location } from "@angular/common";
import { CartService } from "@app/pages/cart/services/cart.service";
import { Product } from "@app/fake_data";
import { DataService } from "@core/services/dataService/data.service";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-cart",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
  imports: [MatButtonModule, RouterModule, CommonModule],
})
export class CartComponent implements OnInit {
  constructor(
    public location: Location,
    public cartService: CartService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  changeItemInCart($event: Event, item: Product, process = "add") {
    $event.stopPropagation();
    if (process === "remove") {
      return this.dataService.updateQuantity(item, "remove");
    }
    this.dataService.updateQuantity(item);
  }

  switchToDetail(item: Product) {
    this.router
      .navigate([
        item.category_url + "/" + item.subCategory_url + "/" + item.url,
      ])
      .then();
  }
}
