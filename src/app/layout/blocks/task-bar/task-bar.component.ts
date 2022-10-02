import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-task-bar",
  templateUrl: "./task-bar.component.html",
  styleUrls: ["./task-bar.component.scss"],
})
export class TaskBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
