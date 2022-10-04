import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { CartService } from "@app/pages/cart/services/cart.service";

@Component({
  standalone: true,
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatButtonModule],
})
export class FooterComponent implements OnInit {
  constructor(public cartService: CartService) {
    cartService.itemsSelected.subscribe((rs) => console.log(rs));
  }

  ngOnInit(): void {}
}
