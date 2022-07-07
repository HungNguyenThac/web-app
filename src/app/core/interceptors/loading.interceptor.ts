import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { finalize } from "rxjs/operators";
import { LoadingService } from "@core/services/loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  totalRequests = 0;
  completedRequests = 0;

  constructor(private dialog: MatDialog, private loading: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    Promise.resolve(null).then(() => {
      if (!req.reportProgress) {
        this.totalRequests++;
        this.loading.next(true);
      }
    });

    return next.handle(req).pipe(
      finalize(() => {
        if (!req.reportProgress) {
          this.completedRequests++;

          if (this.completedRequests === this.totalRequests) {
            this.completedRequests = 0;
            this.totalRequests = 0;
            this.loading.next(false);
          }
        }
      })
    );
  }
}
