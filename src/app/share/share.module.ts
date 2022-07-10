import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./modules/material.modules";
import { HttpClientModule } from "@angular/common/http";
import * as formComponents from "@app/share/components";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@NgModule({
  declarations: [...formComponents.components],
  imports: [CommonModule, MaterialModule, HttpClientModule],
  exports: [MaterialModule, ...formComponents.components],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
})
export class ShareModule {}
