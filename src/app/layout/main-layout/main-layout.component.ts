import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { layout } from "@app/layout";
import { MatSidenavModule } from "@angular/material/sidenav";

@Component({
  standalone: true,
  selector: "app-desktop-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: ["./main-layout.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [layout, MatSidenavModule],
})
export class MainLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
