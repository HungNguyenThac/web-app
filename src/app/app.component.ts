import { Component, OnInit } from "@angular/core";
import { routerFadeAnimation } from "@core/common/animations/router.animation";
import { Store } from "@ngrx/store";
import { AppState, getCoreState, loginSignin } from "@core/store";
import { Observable } from "rxjs";
import { LoadingService } from "@core/services/loading.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routerFadeAnimation],
})
export class AppComponent implements OnInit {
  title = "dashboard";
  private routerState: Observable<AppState>;

  constructor(
    private _store: Store<AppState>,
    private _loading: LoadingService
  ) {
    this.routerState = _store.select(getCoreState);
  }

  ngOnInit() {
    this._store.dispatch(
      loginSignin({
        payload: { username: "NguyenThacHung", password: "*****" },
      })
    );
    this.routerState.subscribe((state) => console.log(state));
  }
}
