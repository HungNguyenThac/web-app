import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { faAppleWhole, faBowlFood, faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  standalone: true,
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule],
})
export class SidebarComponent implements OnInit {
  drinksIcon = faMartiniGlassCitrus;
  fruitsIcon = faAppleWhole;
  foodsIcon = faBowlFood;
  constructor() {}

  ngOnInit(): void {}
}
