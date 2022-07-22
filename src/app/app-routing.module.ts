import { Routes } from "@angular/router";
import { MainLayoutComponent } from "@app/layout/main-layout/main-layout.component";
import { configRoutes } from "@core/common/constants/routes-config";
import { AuthGuardService } from "@core/services/auth-guard.service";

export const routes: Routes = [
  {
    path: configRoutes.APP_ROUTING.PATH,
    component: MainLayoutComponent,
    data: {
      animation: true,
      title: "Main Layout",
    },
  },
  {
    path: configRoutes.APP_ROUTING.AUTH_ROUTING,
    loadChildren: () =>
      import("./pages/auth/auth.module").then((m) => m.AuthModule),
    data: { preload: true, delay: false },
    canLoad: [AuthGuardService],
  },
];
