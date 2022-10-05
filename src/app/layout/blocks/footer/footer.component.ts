import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { CartService } from "@app/pages/cart/services/cart.service";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { UserInfoComponent } from "@app/share/components/modal/user-info/user-info.component";
import { config } from "@core/common/constants/config";
import { EnumTypeConfirm } from "@core/common/enum";

@Component({
  standalone: true,
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
})
export class FooterComponent implements OnInit {
  constructor(public cartService: CartService, private matDialog: MatDialog) {}

  ngOnInit(): void {}

  order() {
    const modalConfirm = this.matDialog.open(UserInfoComponent, {
      width: config.DIALOG_SIZE_MD,
    });

    modalConfirm.afterClosed().subscribe((result) => {});
  }
}
