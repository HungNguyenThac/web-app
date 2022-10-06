import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState, getCoreState } from "@core/store";
import { Observable, Subscription } from "rxjs";
import { MainLayoutComponent } from "@app/layout/main-layout/main-layout.component";
import { RouterModule } from "@angular/router";
import { componentsShare } from "@app/share/components";

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [MainLayoutComponent, RouterModule, componentsShare.loading],
  providers: [],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "Tada Menu";
  private _subManager = new Subscription();
  private _routerState: Observable<AppState>;

  constructor(private _store: Store<AppState>) {
    this._routerState = _store.select(getCoreState);
  }

  ngOnDestroy(): void {
    this._subManager.unsubscribe();
  }

  ngOnInit(): void {}
}
