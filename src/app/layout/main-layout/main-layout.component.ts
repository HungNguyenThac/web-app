import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { HeaderComponent } from "@app/layout/blocks/header/header.component";
import { FooterComponent } from "@app/layout/blocks/footer/footer.component";
import { BodyComponent } from "@app/layout/blocks/body/body.component";

@Component({
  standalone: true,
  selector: "app-main-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: ["./main-layout.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent, FooterComponent, BodyComponent, MatSidenavModule],
})
export class MainLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
