import { Routes } from "@angular/router";
import { LoginSignInComponent } from "@app/pages/auth/login-sign-in/login-sign-in.component";
import { pagesTitle } from "@core/common/constants/pages-title";
import { configRoutes } from "@core/common/constants/routes-config";

export const authRoutes: Routes = [
  {
    path: configRoutes.AUTH_ROUTING.PATH,
    children: [
      {
        path: configRoutes.AUTH_ROUTING.CHILDREN.LOGIN,
        component: LoginSignInComponent,
        data: {
          title: pagesTitle.AUTH,
        },
      },
    ],
  },
];
