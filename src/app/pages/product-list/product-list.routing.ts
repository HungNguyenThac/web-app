import { Routes } from "@angular/router";

export const productListRouting: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./product-list.component").then((c) => c.ProductListComponent),
  },
  {
    path: ":slug",
    loadComponent: () =>
      import("../product-detail/product-detail.component").then(
        (c) => c.ProductDetailComponent
      ),
  },
];
