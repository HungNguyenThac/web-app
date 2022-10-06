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
import { WindowResizeService } from "@core/services/window-resize/window-resize.service";
import { config } from "@core/common/constants/config";
import { BodyService } from "@app/layout/blocks/body/services/body.service";
import { Subscription } from "rxjs";

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
  subManager = new Subscription();
  opened = true;
  hasBackdrop = true;
  sideMode: MatDrawerMode = "over";

  constructor(
    public windowResize: WindowResizeService,
    private cdr: ChangeDetectorRef,
    private bodyService: BodyService
  ) {}

  ngOnInit(): void {
    this.bodyService.opened.subscribe((rs) => {
      this.opened = rs;
      this.cdr.detectChanges();
    });
    this.bodyService.hasBackdrop.subscribe((rs) => (this.hasBackdrop = rs));
    this.bodyService.sideMode.subscribe((rs) => (this.sideMode = rs));
  }

  ngAfterViewInit(): void {
    this.windowResize.windowWidth$.subscribe(() => this.cdr.detectChanges());
  }
}
