import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-track-order",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./track-order.component.html",
  styleUrls: ["./track-order.component.scss"],
})
export class TrackOrderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
