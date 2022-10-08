import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState, getCoreState } from "@core/store";
import { Observable, Subscription } from "rxjs";
import { MainLayoutComponent } from "@app/layout/main-layout/main-layout.component";
import { RouterModule } from "@angular/router";
import { LoadingComponent } from "@app/share/components";
import { MatButtonModule } from "@angular/material/button";

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [MainLayoutComponent, RouterModule, LoadingComponent, MatButtonModule],
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
