import { Routes } from "@angular/router";
import { MainLayoutComponent } from "@app/layout/main-layout/main-layout.component";
import { configRoutes } from "@core/common/constants/routes-config";
import { NotFoundComponent } from "@app/pages/Errors/not-found/not-found.component";
import { pagesTitle } from "@core/common/constants/pages-title";

export const routes: Routes = [
  {
    path: configRoutes.APP_ROUTING.PATH,
    component: MainLayoutComponent,
    title: pagesTitle.HOME,
    children: [
      {
        path: "",
        loadComponent: () =>
          import("./pages/home/home.component").then((c) => c.HomeComponent),
      },
      {
        path: configRoutes.APP_ROUTING.CHILDREN.CART,
        pathMatch: "full",
        loadComponent: () =>
          import("./pages/cart/cart.component").then((c) => c.CartComponent),
      },
      {
        path: configRoutes.APP_ROUTING.CHILDREN.YOUR_ORDER,
        loadComponent: () =>
          import("./pages/track-order/track-order.component").then(
            (c) => c.TrackOrderComponent
          ),
      },
      {
        path: configRoutes.APP_ROUTING.CHILDREN.PARAM,
        loadChildren: () =>
          import("./pages/menu-lv2/menu-lv2.routing").then(
            (r) => r.menuLv2Routing
          ),
      },
    ],
  },
  {
    path: configRoutes.APP_ROUTING.AUTH_ROUTING,
    loadChildren: () =>
      import("./pages/auth/auth-routing.module").then((mod) => mod.authRoutes),
    // canLoad: [AuthGuardService],
    data: { preload: false, delay: true },
  },
  {
    path: configRoutes.APP_ROUTING.NOT_FOUND,
    component: NotFoundComponent,
    pathMatch: "full",
    title: pagesTitle.NOT_FOUND,
  },
];
