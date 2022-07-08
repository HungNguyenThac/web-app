import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./modules/material.modules";
import { HttpClientModule } from "@angular/common/http";
import { LoadingComponent } from "./components/loading/loading.component";
import { components } from "@app/share/components";

@NgModule({
  declarations: [...components, LoadingComponent],
  imports: [CommonModule, MaterialModule, HttpClientModule],
  exports: [MaterialModule, ...components],
})
export class ShareModule {}
