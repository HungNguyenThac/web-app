import { HTTP_INTERCEPTORS } from "@angular/common/http";
import * as fromInterceptors from "@core/interceptors";
import { DEFAULT_TIMEOUT } from "@core/interceptors/timeout.interceptor";
import { APP_INITIALIZER, Injector } from "@angular/core";
import { config } from "@core/common/constants/config";
import {
  appInitializerFactory,
  MultiLanguageService,
} from "@app/share/translate";
import { CustomPreloadingStrategy } from "@core/common/providers/custom-preloading-strategy";
import { RouteReuseStrategy, TitleStrategy } from "@angular/router";
import { TemplatePageTitleStrategy } from "@core/services/browser-title/set-browser-title.service";
import { RouteReusableStrategy } from "@core/services/router-reuseable/route-reuseable-strategy.service";

export const providers = [
  MultiLanguageService,
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
  { provide: DEFAULT_TIMEOUT, useValue: config.DEFAULT_TIMEOUT },
  { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  { provide: RouteReuseStrategy, useClass: RouteReusableStrategy },
  CustomPreloadingStrategy,
];
