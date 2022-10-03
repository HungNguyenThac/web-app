import { Routes } from "@angular/router";

export const menuLv3Routing: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./menu-lv3.component").then((c) => c.MenuLv3Component),
  },
  {
    path: ":slug",
    loadComponent: () =>
      import("../product-detail/product-detail.component").then(
        (c) => c.ProductDetailComponent
      ),
  },
];
