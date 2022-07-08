import { Injectable } from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import {
  catchError,
  delay,
  Observable,
  of,
  retryWhen,
  take,
  throwError,
} from "rxjs";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import * as fromSelectors from "../store/selectors";
import * as fromActions from "../store";
import { environment } from "@environments/environment";
import { MultiLanguageService } from "@app/share/translate/multiLanguageService";
import { ToastrService } from "ngx-toastr";
import { LoadingService } from "@core/services/loading.service";
import { Location } from "@angular/common";

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {
  // private accessToken$: Observable<string | undefined>;
  private authorization = "";

  serverErrorStatusNotRetry = {
    BadRequest: 400,
    Unauthorized: 401,
    PermissionDenied: 403,
    InternalServer: 500,
  };

  serverErrorStatusRetry = [408, 500, 502, 503, 504, 522, 524];

  constructor(
    private _router: Router,
    private _location: Location,
    // private _store: Store<{ accessToken: string }>,
    private _loading: LoadingService,
    private _multiLanguageService: MultiLanguageService,
    private _notifier: ToastrService
  ) {
    // this.accessToken$ = _store.select(fromSelectors.getTokenState);
    // this.accessToken$.subscribe((token) => {
    //   if (token) this.authorization = token;
    // });
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("HttpRequest", request);
    const headers = {
      Authorization: "",
    };

    if (
      (!request.url.includes("/v1/signOn") &&
        !request.url.includes("/v1/credentials/getToken")) ||
      request.url.includes("/v1/signOn/signOut")
    ) {
      headers["Authorization"] = `Bearer ${this.authorization}`;
    }

    // clone the request
    const clone = request.clone({ setHeaders: headers });

    // check domain
    if (clone.url.startsWith(environment.API_BASE_URL) || clone.url.startsWith(environment.INCLUDE_PARAM)) {
      return next.handle(clone).pipe(
        catchError((error) => {
          if (error instanceof HttpErrorResponse)
            return this._handleError(error, clone, next);

          this._notifier.error(
            this._multiLanguageService.instant("common.something_went_wrong")
          );
          return of(null);
        })
      );
    } else {
      this._notifier.error(
        this._multiLanguageService.instant("common.something_went_wrong")
      );

      return throwError(() =>
        this._multiLanguageService.instant("common.domain_went_wrong")
      );
    }
  }

  private _handleError(
    err: HttpErrorResponse,
    clone: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {
    this._notifier.error(err?.error?.message);
    this._loading.next(false);

    // retry 3 time on error
    if (this.serverErrorStatusRetry.includes(err.status)) {
      return next.handle(clone).pipe(
        retryWhen((errors) => errors.pipe(delay(1000), take(3))),
        catchError((err) => of(err))
      );
    }

    // no retry on error
    switch (err.status) {
      case this.serverErrorStatusNotRetry.Unauthorized:
        // this._store.dispatch(fromActions.logout({}));
        return of(this._router.navigate(["auth/sign-in"]));
      case this.serverErrorStatusNotRetry.BadRequest:
        return of(err);
      case this.serverErrorStatusNotRetry.PermissionDenied:
        return of(this._location.back());
      default:
        return of(err);
    }
  }
}
