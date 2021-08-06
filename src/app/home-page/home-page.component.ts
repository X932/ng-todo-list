import { Component, OnInit } from "@angular/core";
import {
  ITodo,
  ListService,
} from "../shared/services/listService/list.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent {
  constructor(private listService: ListService) {}

  // todoList: ITodo[] = this.listService.getTodoList();
}
