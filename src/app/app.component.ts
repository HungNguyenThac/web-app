import { Component, OnInit } from "@angular/core";
import { routerFadeAnimation } from "@core/common/animations/router.animation";
import { Store } from "@ngrx/store";
import { AppState, getCoreState } from "@core/store";
import { Observable } from "rxjs";
import { SetBrowserTitleService } from "@core/services/set-browser-title.service";
import { HttpClient } from "@angular/common/http";
import { config } from "@core/common/constants/config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routerFadeAnimation],
})
export class AppComponent implements OnInit {
  title = "Base Angular Ngrx";
  private _routerState: Observable<AppState>;

  constructor(
    private _store: Store<AppState>,
    private _setBrowserTitle: SetBrowserTitleService,
    private _httpSv: HttpClient
  ) {
    this._routerState = _store.select(getCoreState);
  }

  ngOnInit(): void {
    this._setBrowserTitle.setBrowserTabTitle();
    this._httpSv
      .post(`${config.API_BASE_URL}/post`, {})
      .subscribe((rs) => console.log(rs));
  }
}
