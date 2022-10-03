import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import {
  faAppleWhole,
  faBowlFood,
  faChevronRight,
  faMartiniGlassCitrus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TranslateModule } from "@ngx-translate/core";
import { ICategory } from "@app/fake_data/category";
import { SidebarService } from "@app/layout/blocks/sidebar/component/sidebar.service";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatExpansionModule } from "@angular/material/expansion";
import { SubsCategoryComponent } from "@app/layout/blocks/sidebar/component/subs-category/subs-category.component";

@Component({
  standalone: true,
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FontAwesomeModule,
    TranslateModule,
    RouterModule,
    CommonModule,
    FontAwesomeModule,
    MatExpansionModule,
    SubsCategoryComponent,
  ],
})
export class SidebarComponent implements OnInit {
  categoryList: ICategory[];
  drinksIcon = faMartiniGlassCitrus;
  fruitsIcon = faAppleWhole;
  foodsIcon = faBowlFood;
  chevronRight = faChevronRight;
  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.fakeCategory.subscribe(
      (rs) => (this.categoryList = rs)
    );
  }
}
