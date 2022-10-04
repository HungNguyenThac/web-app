import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons/faBarsStaggered";
import { WindowResizeService } from "@core/services/window-resize.service";
import { config } from "@core/common/constants/config";
import { CartService } from "@app/pages/cart/services/cart.service";
import { ToastrService } from "ngx-toastr";
import { BodyService } from "@app/layout/blocks/body/services/body.service";

@Component({
  standalone: true,
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule, RouterModule],
  providers: [],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  cartIcon = faCartShopping;
  barIcon = faBarsStaggered;
  isShowBarIcon = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    public windowResize: WindowResizeService,
    private cdr: ChangeDetectorRef,
    private cartService: CartService,
    private toastService: ToastrService,
    private bodyService: BodyService
  ) {}

  ngOnInit(): void {
    this.windowResize.windowWidth$.subscribe((rs) =>
      rs > config.BREAK_POINT_TABLET
        ? (this.isShowBarIcon = true)
        : (this.isShowBarIcon = false)
    );
  }

  ngAfterViewInit() {
    this.windowResize.windowWidth$.subscribe((rs) => this.cdr.detectChanges());
  }

  test() {
    this._router.navigate(["auth/sign-in"]).then();
  }

  switchToCartPage() {
    this.cartService.itemsSelected.subscribe((rs) => {
      rs.length > 0
        ? this._router.navigate(["/cart"])
        : this.toastService.error("Giỏ hàng trống");
    });
  }

  toggleSidebar() {
    this.bodyService.toggleSidebar();
  }
}
