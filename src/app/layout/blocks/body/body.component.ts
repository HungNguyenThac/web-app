import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { SidebarComponent } from "@app/layout/blocks/sidebar/sidebar.component";
import { MatDrawerMode, MatSidenavModule } from "@angular/material/sidenav";
import { RouterModule } from "@angular/router";
import { routerFadeAnimation } from "@core/common/animations/router.animation";
import { WindowResizeService } from "@core/services/window-resize.service";
import { config } from "@core/common/constants/config";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SidebarComponent, MatSidenavModule, RouterModule],
  animations: [routerFadeAnimation],
})
export class BodyComponent implements OnInit, AfterViewInit {
  opened = true;
  hasBackdrop = true;
  sideMode: MatDrawerMode = "over";

  constructor(
    public windowResize: WindowResizeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.windowResize.windowWidth$.subscribe((rs) => {
      if (rs > config.BREAK_POINT_TABLET) {
        ((this.sideMode = "side"), (this.opened = true)),
          (this.hasBackdrop = false);
      } else {
        (this.opened = true),
          (this.sideMode = "over"),
          (this.hasBackdrop = true);
      }
    });
  }

  ngAfterViewInit(): void {
    this.windowResize.windowWidth$.subscribe(() => this.cdr.detectChanges());
  }
}
