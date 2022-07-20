import { Routes } from "@angular/router";
import { MainLayoutComponent } from "@app/layout/main-layout/main-layout.component";

export const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    data: {
      animation: true,
      title: "Main Layout",
    },
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./pages/auth/auth.module").then((m) => m.AuthModule),
    data: { preload: true, delay: false },
  },
];
