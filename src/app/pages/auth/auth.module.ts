import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginSignInComponent } from "./login-sign-in/login-sign-in.component";
import { RouterModule } from "@angular/router";
import { authRoutes } from "@app/pages/auth/auth-routing.module";

@NgModule({
  declarations: [LoginSignInComponent],
  imports: [CommonModule, RouterModule.forChild(authRoutes)],
})
export class AuthModule {}
