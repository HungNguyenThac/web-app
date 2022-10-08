import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { ICategory } from "@app/fake_data/category";
import { SidebarService } from "@app/layout/blocks/sidebar/services/sidebar.service";
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
  imports: [TranslateModule, RouterModule, CommonModule, MatExpansionModule, SubsCategoryComponent],
})
export class SidebarComponent implements OnInit {
  categoryList?: ICategory[];
  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.fakeCategory.subscribe((rs) => (this.categoryList = rs));
  }
}
