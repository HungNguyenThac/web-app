import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from "@angular/core";
import { EnumActionUser, EnumTypeNotiOrder } from "@core/common/enum";
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
  typeNotiOrder: EnumTypeNotiOrder;
  constructor(
    public dialogRef: MatDialogRef<SuccessFailedOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) this.typeNotiOrder = data.type;
  }

  get notiInfo() {
    switch (this.typeNotiOrder) {
      case EnumTypeNotiOrder.ORDER_SUCCEED:
        return {
          title: "Đặt sản phẩm thành công",
          des: "Đặt sản phẩm thành công",

          buttonSecond: "Theo dõi đơn hàng",
          actionSecond: EnumActionUser.TRACK_ORDER_STATUS,

          buttonPrimary: "Thanh toán",
          actionPrimary: EnumActionUser.PAYMENT,
        };

      case EnumTypeNotiOrder.ORDER_FAILED:
        return {
          title: "Đặt sản phẩm thất bại",
          des: "Đặt sản phẩm thất bại",

          buttonSecond: "Huỷ",
          actionSecond: EnumActionUser.CANCEL,

          buttonPrimary: "Đặt lại",
          actionPrimary: EnumActionUser.RE_ORDER,
        };

      default:
        return {};
    }
  }

  ngOnInit(): void {}
}
