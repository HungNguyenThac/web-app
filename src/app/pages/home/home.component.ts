import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ProductListComponent } from "@app/pages/home/components/product-list/product-list.component";
import { ProductGridComponent } from "@app/pages/home/components/product-grid/product-grid.component";
import { category, ICategory } from "@app/fake_data/category";
import { Observable, of } from "rxjs";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  imports: [
    ProductListComponent,
    ProductGridComponent,
    CommonModule,
    MatButtonModule,
    RouterModule,
  ],
})
export class HomeComponent implements OnInit {
  category: Observable<ICategory[]> = of(category);
  constructor() {}

  ngOnInit(): void {}
}
