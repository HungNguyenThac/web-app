import { Injectable } from "@angular/core";
import { filter, map } from "rxjs";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { mergeMap } from "rxjs/operators";
import { environment } from "@environments/environment";
import { Title } from "@angular/platform-browser";
import { config } from "@core/common/constants/config";

@Injectable({
  providedIn: "root",
})
export class SetBrowserTitleService {
  constructor(
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public setBrowserTabTitle(): void {
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
      return [pageTitle, config.PROJECT_NAME].join(
        config.BROWSER_TAB_TITLE_DELIMITER
      );
    }
    return config.PROJECT_NAME;
  }
}
