import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import {
  catchError,
  delay,
  EMPTY,
  Observable,
  of,
  retryWhen,
  switchMap,
  take,
  tap,
} from "rxjs";
import { config } from "@core/common/constants/config";
import { ToastrService } from "ngx-toastr";
import { MultiLanguageService } from "@app/share/translate/multiLanguageService";
import { LoadingService } from "@core/services/loading.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Store } from "@ngrx/store";
import { logoutSignOut, refreshTokenSuccess } from "@core/store";
import { get } from "lodash";

@Injectable()
export class HandleErrorsInterceptor implements HttpInterceptor {
  ErrorStatusNotRetry = {
    BadRequest: 400,
    Unauthorized: 401,
    PermissionDenied: 403,
  };

  ErrorStatusRetry = [408, 500, 502, 503, 504, 522, 524];

  constructor(
    private _router: Router,
    private _location: Location,
    private _store: Store<{ accessToken: string }>,
    private _loading: LoadingService,
    private _multiLanguageService: MultiLanguageService,
    private _notifier: ToastrService,
    private _http: HttpClient
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // check domain
    if (request.url.startsWith(config.API_BASE_URL)) {
      return next.handle(request).pipe(
        catchError((error) => {
          if (error instanceof HttpErrorResponse)
            return this._handleError(error, request, next);

          this._notifier.error(
            this._multiLanguageService.instant("common.something_went_wrong")
          );

          return of(null);
        })
      );
    } else {
      return next.handle(request);
    }
  }

  private _handleError(
    err: HttpErrorResponse,
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {
    this._loading.next(false);

    // retry on error
    if (this.ErrorStatusRetry.includes(err.status)) {
      return next.handle(request).pipe(
        retryWhen((errors) =>
          errors.pipe(
            tap(() => this._notifier.error(err?.message)),
            delay(config.DELAY_TIME_RECALL_API),
            take(config.RETRY_CALL_API)
          )
        ),
        catchError((err) => of(err))
      );
    }

    // no retry on error
    if (err.status != this.ErrorStatusNotRetry.Unauthorized)
      this._notifier.error(err?.error?.message);

    switch (err.status) {
      case this.ErrorStatusNotRetry.Unauthorized:
        // dont refresh token
        // this._store.dispatch(logoutSignOut({}));
        // return of(this._router.navigate(["auth/sign-in"]));

        // refresh token
        return this._reFreshToken(request, next);
      case this.ErrorStatusNotRetry.BadRequest:
        return of(err);
      case this.ErrorStatusNotRetry.PermissionDenied:
        this._location.back();
        return of(err);
      default:
        return of(err);
    }
  }

  private _reFreshToken = (
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> => {
    return this._http
      .post(
        `${config.API_BASE_URL}/refresh-token`,
        {
          refreshToken: "123123",
        },
        { withCredentials: true }
      )
      .pipe(
        switchMap((res: any) => {
          if (!res || res.code != config.RESPONSE_CODE_SUCCESS) {
            this._store.dispatch(logoutSignOut({}));
            const message = get(res, "resultDesc", null) || "error";
            this._notifier.error(message);
            return EMPTY;
          }

          this._store.dispatch(refreshTokenSuccess({ payload: res.token }));
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${res.token}`,
            },
          });
          return next.handle(request);
        })
      );
  };
}
