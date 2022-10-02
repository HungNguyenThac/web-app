import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
