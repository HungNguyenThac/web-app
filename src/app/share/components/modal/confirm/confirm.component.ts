import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { EnumTypeConfirm } from "@core/common/enum";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-confirm",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./confirm.component.html",
  styleUrls: ["./confirm.component.scss"],
  imports: [MatButtonModule],
})
export class ConfirmComponent implements OnInit {
  confirmType?: EnumTypeConfirm;
  constructor(public dialogRef: MatDialogRef<ConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) this.confirmType = data.type;
  }

  get confirmInfo() {
    switch (this.confirmType) {
      case EnumTypeConfirm.CART:
        return {
          title: "Bạn có chắc muốn xoá sản phẩm?",
          des: "",
          cancel: "Huỷ",
          approve: "Xoá",
        };

      case EnumTypeConfirm.ORDER:
        return {
          title: "Xác nhận đặt món?",
          des: "Bằng việc xác nhận, bạn đã đồng ý với các chính sách của chúng tôi",
          cancel: "Huỷ",
          approve: "Xác nhận",
        };

      default:
        return {};
    }
  }

  ngOnInit(): void {}
}
