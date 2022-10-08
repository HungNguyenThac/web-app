import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { ICategory } from "@app/fake_data/category";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: "app-subs-category",
  templateUrl: "./subs-category.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, CommonModule],
})
export class SubsCategoryComponent implements OnInit {
  @Input() category: ICategory;
  constructor() {}

  ngOnInit(): void {}
}
