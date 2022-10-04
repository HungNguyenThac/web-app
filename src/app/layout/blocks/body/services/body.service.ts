import { ChangeDetectorRef, Injectable } from "@angular/core";
import { WindowResizeService } from "@core/services/window-resize.service";
import { BehaviorSubject, Observable } from "rxjs";
import { MatDrawerMode } from "@angular/material/sidenav";
import { config } from "@core/common/constants/config";

@Injectable({
  providedIn: "root",
})
export class BodyService {
  private _opened = new BehaviorSubject<boolean>(false);
  public opened = this._opened.asObservable();

  private _hasBackdrop = new BehaviorSubject<boolean>(true);
  public hasBackdrop = this._hasBackdrop.asObservable();

  private _sideMode = new BehaviorSubject<MatDrawerMode>("over");
  public sideMode = this._sideMode.asObservable();

  constructor(private windowResize: WindowResizeService) {
    this.windowResize.windowWidth$.subscribe((rs) => {
      if (rs > config.BREAK_POINT_TABLET) {
        this._opened.next(true);
        this._sideMode.next("side");
        this._hasBackdrop.next(false);
        return;
      }
      this._opened.next(false);
      this._sideMode.next("over");
      this._hasBackdrop.next(true);
    });
  }

  toggleSidebar() {
    this._opened.next(!this._opened.value);
  }
}
