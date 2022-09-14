import { Routes } from "@angular/router";
import { MainLayoutComponent } from "@app/layout/main-layout/main-layout.component";
import { configRoutes } from "@core/common/constants/routes-config";
import { AuthGuardService } from "@core/services/auth-guard.service";
import { NotFoundComponent } from "@app/pages/Errors/not-found/not-found.component";
import { pagesTitle } from "@core/common/constants/pages-title";

export const routes: Routes = [
  {
    path: configRoutes.APP_ROUTING.PATH,
    component: MainLayoutComponent,
    data: {
      title: "Main Layout",
    },
  },
  {
    path: configRoutes.APP_ROUTING.AUTH_ROUTING,
    loadChildren: () => import("./pages/auth/auth-routing.module").then((mod) => mod.authRoutes),
    data: { preload: true, delay: false },
    canLoad: [AuthGuardService],
  },
  {
    path: configRoutes.APP_ROUTING.NOT_FOUND,
    component: NotFoundComponent,
    data: {
      title: pagesTitle.NOT_FOUND,
    },
  },
];
