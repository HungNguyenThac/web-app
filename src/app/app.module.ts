import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppComponent } from "@app/app.component";
import { routes } from "@app/app-routing.module";
import { ShareModule } from "@app/share/share.module";
import { CustomPreloadingStrategy } from "@core/common/providers/custom-preloading-strategy";
import { LayoutModule } from "@app/layout/layout.module";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "@core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    LayoutModule,
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
