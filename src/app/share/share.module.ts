import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./modules/material.modules";
import { components } from "@app/share/components/layout";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MaterialModule, HttpClientModule],
  exports: [MaterialModule, ...components],
})
export class ShareModule {}
