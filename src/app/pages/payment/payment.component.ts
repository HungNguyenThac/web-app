import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./payment.component.scss"],
})
export class PaymentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
