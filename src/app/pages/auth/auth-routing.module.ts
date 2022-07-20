import { Routes } from "@angular/router";
import { LoginSignInComponent } from "@app/pages/auth/login-sign-in/login-sign-in.component";
import { PagesTitle } from "@core/common/constants/pages-title";

export const authRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "sign-in",
        component: LoginSignInComponent,
        data: {
          title: PagesTitle.PagesTitle.auth,
        },
      },
    ],
  },
];
