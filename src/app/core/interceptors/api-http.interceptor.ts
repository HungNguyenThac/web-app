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
  tap,
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
import { config } from "@core/common/constants/config";

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {
  private accessToken$: Observable<string | undefined>;
  private authorization = "";

  serverErrorStatusNotRetry = {
    BadRequest: 400,
    Unauthorized: 401,
    PermissionDenied: 403,
  };

  serverErrorStatusRetry = [408, 500, 502, 503, 504, 522, 524];

  constructor(
    private _router: Router,
    private _location: Location,
    private _store: Store<{ accessToken: string }>,
    private _loading: LoadingService,
    private _multiLanguageService: MultiLanguageService,
    private _notifier: ToastrService
  ) {
    this.accessToken$ = _store.select(fromSelectors.getTokenState);
    this.accessToken$.subscribe((token) => {
      if (token) this.authorization = token;
    });
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("HttpRequest", request);

    const headers = {
      Authorization: "",
    };

    // check domain
    if (
      request.url.startsWith(environment.API_BASE_URL) ||
      request.url.startsWith(environment.ASSETS_PATH)
    ) {
      headers["Authorization"] = `Bearer ${this.authorization}`;

      // set token
      const clone = request.clone({ setHeaders: headers });

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

      return throwError(() => "Domain denied");
    }
  }

  private _handleError(
    err: HttpErrorResponse,
    clone: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {
    this._loading.next(false);

    // retry on error
    if (this.serverErrorStatusRetry.includes(err.status)) {
      return next.handle(clone).pipe(
        retryWhen((errors) =>
          errors.pipe(
            tap(() => this._notifier.error(err?.error?.message)),
            delay(config.DELAY_TIME_RECALL_API),
            take(config.RETRY_CALL_API)
          )
        ),
        catchError((err) => of(err))
      );
    }

    // no retry on error
    this._notifier.error(err?.error?.message);

    switch (err.status) {
      case this.serverErrorStatusNotRetry.Unauthorized:
        this._store.dispatch(fromActions.logoutSignout({}));
        return of(this._router.navigate(["auth/sign-in"]));
      case this.serverErrorStatusNotRetry.BadRequest:
        return of(err);
      case this.serverErrorStatusNotRetry.PermissionDenied:
        this._location.back();
        return of(err);
      default:
        return of(err);
    }
  }
}
