import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { ListService } from "../shared/services/listService/list.service";
import { EditTaskComponent } from "./todo-list/edit-task/edit-task.component";
import { AppRoutingModule } from "../app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HomePageComponent,
    AddTaskComponent,
    TodoListComponent,
    EditTaskComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [ListService],
})
export class HomePageModule {}
