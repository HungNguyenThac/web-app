import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from "@angular/core";
import { EnumTypeNotiOrder } from "@core/common/enum";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-success-failed-order",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./success-failed-order.component.html",
  styleUrls: ["./success-failed-order.component.scss"],
  imports: [MatButtonModule, MatDialogModule],
})
export class SuccessFailedOrderComponent implements OnInit {
  typeNotiOder: EnumTypeNotiOrder;
  constructor(
    public dialogRef: MatDialogRef<SuccessFailedOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) this.typeNotiOder = data.type;
  }

  get notiInfo() {
    switch (this.typeNotiOder) {
      case EnumTypeNotiOrder.ORDER_SUCCEED:
        return {
          title: "Đặt sản phẩm thành công",
          des: "Đặt sản phẩm thành công",
          cancel: "Theo dõi đơn hàng",
          reorder: "Thanh toán luôn",
        };

      case EnumTypeNotiOrder.ORDER_FAILED:
        return {
          title: "Đặt sản phẩm thất bại",
          des: "Đặt sản phẩm thất bại",
          cancel: "Huỷ",
          reorder: "Đặt lại",
        };

      default:
        return {};
    }
  }

  ngOnInit(): void {}
}
