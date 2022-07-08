import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppComponent } from "@app/app.component";
import { routes } from "@app/app-routing.module";
import { ShareModule } from "@app/share/share.module";
import { CoreModule } from "@core/core.module";
import { CustomPreloadingStrategy } from "@core/common/providers/custom-preloading-strategy";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    ShareModule,
    RouterModule.forRoot(routes, {
      relativeLinkResolution: "corrected",
      preloadingStrategy: CustomPreloadingStrategy,
    }),
  ],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent],
})
export class AppModule {}
