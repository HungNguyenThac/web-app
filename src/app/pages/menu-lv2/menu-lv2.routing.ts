import { Routes } from "@angular/router";

export const productsLv2Routing: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./products-lv2.component").then((c) => c.ProductsLv2Component),
  },
  {
    path: ":name",
    loadComponent: () =>
      import("./products-lv2.component").then((c) => c.ProductsComponent),
  },
];
