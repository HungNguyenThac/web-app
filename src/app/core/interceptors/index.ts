import { ApiHttpInterceptor } from "./api-http.interceptor";
import { TimingInterceptor } from "./timing.interceptor";
import { LoadingInterceptor } from "./loading.interceptor";
import { TimeoutInterceptor } from "./timeout.interceptor";
import { HandleErrorsInterceptor } from "@core/interceptors/handle-errors.interceptor";

export const interceptors: any[] = [
  ApiHttpInterceptor,
  TimingInterceptor,
  LoadingInterceptor,
  TimeoutInterceptor,
  HandleErrorsInterceptor,
];

export * from "./api-http.interceptor";
export * from "./timing.interceptor";
export * from "./loading.interceptor";
export * from "./timeout.interceptor";
export * from "./handle-errors.interceptor";
