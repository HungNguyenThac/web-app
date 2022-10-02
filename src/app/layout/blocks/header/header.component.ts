import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {}

  test() {
    this._router.navigate(["auth/sign-in"]).then();
  }
}
