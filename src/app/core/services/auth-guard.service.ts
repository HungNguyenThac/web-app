import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanLoad,
  Route,
  Router,
  UrlSegment,
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate, CanLoad {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(["auth/sign-in"]).then();
      return false;
    }
    return true;
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.auth.isAuthenticated();
  }
}
