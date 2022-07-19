import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { routerFadeAnimation } from "@core/common/animations/router.animation";
import { Store } from "@ngrx/store";
import { AppState, getCoreState } from "@core/store";
import { filter, map, Observable, Subscription } from "rxjs";
import { LoadingService } from "@core/services/loading.service";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { mergeMap } from "rxjs/operators";
import { Title } from "@angular/platform-browser";
import { environment } from "@environments/environment";
import { WindowResizeService } from "@core/services/window-resize.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routerFadeAnimation],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = "Base Angular Ngrx";
  private routerState: Observable<AppState>;
  subManager = new Subscription();
  windowInnerWidth!: number;

  constructor(
    private store: Store<AppState>,
    private loading: LoadingService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    public windowResize: WindowResizeService,
    private cdr: ChangeDetectorRef
  ) {
    this.routerState = store.select(getCoreState);
  }

  ngOnInit(): void {
    this.setBrowserTabTitle();
  }

  ngAfterViewInit(): void {
    this.subManager.add(
      this.windowResize.windowWidth$.subscribe(() => {
        this.cdr.detectChanges();
      })
    );
  }

  private setBrowserTabTitle(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route),
        map((route) => this.getRouteFirstChild(route)),
        filter((route) => route.outlet === "primary"),
        mergeMap((route) => route.data)
      )
      .subscribe((data) =>
        this.titleService.setTitle(this.buildTitle(data["title"]))
      );
  }

  private getRouteFirstChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  private buildTitle(pageTitle: string): string {
    if (pageTitle) {
      return [pageTitle, environment.PROJECT_NAME].join(
        environment.BROWSER_TAB_TITLE_DELIMITER
      );
    }
    return environment.PROJECT_NAME;
  }

  ngOnDestroy() {
    this.subManager.unsubscribe();
  }
}
