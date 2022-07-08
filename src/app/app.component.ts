import { Component } from "@angular/core";
import { routerFadeAnimation } from "@core/common/animations/router.animation";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routerFadeAnimation],
})
export class AppComponent {
  title = "dashboard";
}
