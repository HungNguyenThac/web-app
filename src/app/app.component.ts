import { AfterViewInit, Component, OnInit } from "@angular/core";
import { routerFadeAnimation } from "@core/common/animations/router.animation";
import { Store } from "@ngrx/store";
import { AppState, getCoreState } from "@core/store";
import { Observable } from "rxjs";
import { SetBrowserTitleService } from "@core/services/set-browser-title.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routerFadeAnimation],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "Base Angular Ngrx";
  private routerState: Observable<AppState>;

  constructor(
    private store: Store<AppState>,
    private setBrowserTitle: SetBrowserTitleService
  ) {
    this.routerState = store.select(getCoreState);
  }

  ngOnInit(): void {
    this.setBrowserTitle.setBrowserTabTitle();
  }

  ngAfterViewInit() {}
}
