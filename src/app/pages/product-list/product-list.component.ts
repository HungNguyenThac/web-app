import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ICategory } from "@app/fake_data/category";
import { ActivatedRoute, Router } from "@angular/router";
import { MenuLv2Service } from "@app/pages/menu-lv2/services/menu-lv2.service";
import { pluck, switchMap } from "rxjs";
import { MenuLv3Service } from "@app/pages/menu-lv3/services/menu-lv3.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-menu-lv3",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./menu-lv3.component.html",
  styleUrls: ["./menu-lv3.component.scss"],
  providers: [MenuLv3Service, CommonModule],
})
export class MenuLv3Component implements OnInit {
  data: ICategory;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private menulv3Sv: MenuLv3Service
  ) {}

  ngOnInit(): void {}

  switchToDetail(url: string) {
    this.router.navigate([this.data.url + "/" + url]);
  }
}
