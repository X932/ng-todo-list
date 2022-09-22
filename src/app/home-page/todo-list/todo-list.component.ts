import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import {
  ITodo,
  ListService,
} from "src/app/shared/services/listService/list.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent {
  constructor(private listService: ListService) {}

  todoList: ITodo[] = this.listService.getTodoList();

  updateTodoList(): void {
    this.todoList = this.listService.getTodoList();
  }

  handleDeleteTodo(id: number): void {
    this.listService.deleteTodo(id);
    this.updateTodoList();
  }

  handleEditTodo(todo: ITodo): void {
    todo.isEditing = true;
  }
}
