import { HTTP_INTERCEPTORS } from "@angular/common/http";
import * as fromInterceptors from "@core/interceptors";
import { DEFAULT_TIMEOUT } from "@core/interceptors/timeout.interceptor";
import { APP_INITIALIZER, Injector } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { CustomMatPaginatorIntl } from "./common/providers/mat-paginator-custom";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from "@angular/material/core";
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from "@angular/material-moment-adapter";
import { MAT_CHIPS_DEFAULT_OPTIONS } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { appInitializerFactory } from "@app/share/translate/appInitializerFactory";
import { MultiLanguageService } from "@app/share/translate/multiLanguageService";
import { config } from "@core/common/constants/config";
import { MatDialogConfig } from "@angular/material/dialog";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material/snack-bar";

export const providers = [
  MultiLanguageService,
  {
    provide: MatPaginatorIntl,
    useClass: CustomMatPaginatorIntl,
  },
  {
    provide: APP_INITIALIZER,
    useFactory: appInitializerFactory,
    deps: [MultiLanguageService, Injector],
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: fromInterceptors.ApiHttpInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: fromInterceptors.HandleErrorsInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: fromInterceptors.TimingInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: fromInterceptors.LoadingInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: fromInterceptors.TimeoutInterceptor,
    multi: true,
  },
  { provide: MAT_DATE_LOCALE, useValue: "vi-VN" },
  {
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE],
  },
  { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  {
    provide: MAT_CHIPS_DEFAULT_OPTIONS,
    useValue: {
      separatorKeyCodes: [ENTER, COMMA],
    },
  },
  { provide: DEFAULT_TIMEOUT, useValue: config.DEFAULT_TIMEOUT },
  {
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: { duration: config.MAT_SNACK_DURATION },
  },
  MatDialogConfig,
];
