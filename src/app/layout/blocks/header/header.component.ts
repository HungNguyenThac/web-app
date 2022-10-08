import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons/faBarsStaggered";
import { WindowResizeService } from "@core/services/window-resize/window-resize.service";
import { config } from "@core/common/constants/config";
import { CartService } from "@app/pages/cart/services/cart.service";
import { ToastrService } from "ngx-toastr";
import { BodyService } from "@app/layout/blocks/body/services/body.service";
import { MultiLanguageService } from "@app/share/translate";

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
  cartQuantity!: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    public windowResize: WindowResizeService,
    private cdr: ChangeDetectorRef,
    private cartService: CartService,
    private toastService: ToastrService,
    private bodyService: BodyService,
    private languageService: MultiLanguageService
  ) {}

  ngOnInit(): void {
    this.windowResize.windowWidth$.subscribe((rs) =>
      rs > config.BREAK_POINT_TABLET ? (this.isShowBarIcon = true) : (this.isShowBarIcon = false)
    );
    this.cartService.cartQuantity.subscribe((rs) => {
      (this.cartQuantity = rs), this.cdr.detectChanges();
    });
  }

  ngAfterViewInit() {
    this.windowResize.windowWidth$.subscribe((rs) => this.cdr.detectChanges());
  }

  switchToCartPage() {
    if (this.cartQuantity > 0) {
      this._router.navigate(["/gio_hang"]).then();
      return;
    }

    this.toastService.error(this.languageService.instant("cart.cart_empty"));
  }

  toggleSidebar() {
    this.bodyService.toggleSidebar();
  }
}
