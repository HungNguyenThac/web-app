import { Routes } from "@angular/router";
import { MainLayoutComponent } from "@app/layout/main-layout/main-layout.component";

export const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    data: {
      title: "Main Layout",
    },
  },
];
