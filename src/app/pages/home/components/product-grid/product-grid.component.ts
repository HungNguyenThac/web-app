import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-menu-lv2-lv2-grid",
  templateUrl: "./product-grid.component.html",
  styleUrls: ["./product-grid.component.scss"],
  imports: [],
})
export class ProductGridComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
