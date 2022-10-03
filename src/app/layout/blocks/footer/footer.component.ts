import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailService } from "@app/pages/product-detail/services/detail.service";
import { MatButtonModule } from "@angular/material/button";

@Component({
  standalone: true,
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatButtonModule],
})
export class FooterComponent implements OnInit {
  constructor(public detailSv: DetailService) {}

  ngOnInit(): void {}
}
