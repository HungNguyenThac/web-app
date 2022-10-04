import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { Location } from "@angular/common";

@Component({
  selector: "app-cart",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
  imports: [MatButtonModule],
})
export class CartComponent implements OnInit {
  constructor(public location: Location) {}

  ngOnInit(): void {}
}
