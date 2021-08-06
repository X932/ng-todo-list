import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  ITodo,
  ListService,
} from "../shared/services/listService/list.service";

@Component({
  selector: "app-detail-task",
  templateUrl: "./detail-task.component.html",
  styleUrls: ["./detail-task.component.scss"],
})
export class DetailTaskComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private listService: ListService
  ) {}

  todoList: ITodo[] = this.listService.getTodoList();

  task: ITodo = {
    id: 0,
    title: "",
    description: "",
    isEditing: false,
  };

  ngOnInit(): void {
    const routerParams = this.route.snapshot.paramMap;
    const taskIdFromRoute = Number(
      routerParams.get("taskId")
    );

    this.task =
      this.todoList.find(
        (task) => task.id === taskIdFromRoute
      ) || this.task;
  }
}
