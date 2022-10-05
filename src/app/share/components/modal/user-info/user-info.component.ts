import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ValidatorService } from "@app/share/validators/custom.validators";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { ConfirmComponent } from "@app/share/components/modal/confirm/confirm.component";
import {
  EnumActionUser,
  EnumTypeConfirm,
  EnumTypeNotiOrder,
} from "@core/common/enum";
import { delay, filter, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { LoadingService } from "@core/services/loading/loading.service";
import { SuccessFailedOrderComponent } from "@app/share/components/modal/success-failed-order/success-failed-order.component";
import { userData } from "@app/fake_data";

@Component({
  selector: "app-user-info",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"],
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    FontAwesomeModule,
  ],
})
export class UserInfoComponent implements OnInit {
  faRotate = faRotate;
  userInfoForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UserInfoComponent>,
    public dialog: MatDialog,
    private loadingService: LoadingService
  ) {
    this.userInfoForm = formBuilder.group({
      userName: ["", [Validators.required]],
      userPhone: ["", [Validators.required, ValidatorService.checkPhoneVN]],
      userAddress: [""],
      userTable: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.userInfoForm.patchValue({
      userName: userData.userName,
      userPhone: userData.userPhone,
      userAddress: userData.userAdress,
      userTable: "1",
    });
  }

  submitForm(event: Event) {
    event.preventDefault();
    this.userInfoForm.markAllAsTouched();
    if (this.userInfoForm.invalid) return;

    this.openPrompt(this.userInfoForm.value);
  }

  private openPrompt(valueForm: any) {
    const dialog = this.dialog.open(ConfirmComponent, {
      data: {
        type: EnumTypeConfirm.ORDER,
      },
    });

    dialog.afterClosed().subscribe((rs: EnumTypeConfirm) => {
      this.loadingService.next(true);
      if (rs) {
        return new Observable((observer) => {
          observer.next(1);
        })
          .pipe(
            delay(1000),
            tap(() => {
              this.loadingService.next(false);
            }),
            map(() => Math.random()),
            filter((rs) => !!rs)
          )
          .subscribe((rs) => {
            if (rs > 0.5) {
              return this.openNotiSucceed(valueForm);
            }
            return this.openNotiFailed(valueForm);
          });
      }
      return this.loadingService.next(false);
    });
  }

  /**
   * thành công mở openSucceed,
   * thất bại ở failed
   *
   * succeed handle 2 trường hợp action thanh toán và theo dõi đơn hàng
   *
   * failed handle trường hợp acion re-order
   *
   *
   */

  openNotiSucceed(valueForm: any) {
    const dialog = this.dialog.open(SuccessFailedOrderComponent, {
      data: {
        type: EnumTypeNotiOrder.ORDER_SUCCEED,
      },
    });

    return dialog.afterClosed().subscribe((rs) => {
      if (rs["action"] === EnumActionUser.PAYMENT) return;
    });
  }

  openNotiFailed(valueForm: any) {
    const dialog = this.dialog.open(SuccessFailedOrderComponent, {
      data: {
        type: EnumTypeNotiOrder.ORDER_FAILED,
      },
    });

    return dialog.afterClosed().subscribe((rs) => {
      if (rs["action"] === EnumActionUser.CANCEL) return;

      this.openPrompt(valueForm);
    });
  }
}
