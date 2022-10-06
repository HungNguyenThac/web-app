import { Routes } from "@angular/router";

export const menuLv2Routing: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./menu-lv2.component").then((c) => c.MenuLv2Component),
  },
  {
    path: ":slug",
    loadChildren: () =>
      import("../product-list/product-list.routing").then(
        (r) => r.productListRouting
      ),
  },
];
