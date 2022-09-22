import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { validateField } from "src/app/shared/directives/field-validation.directive";
import {
  ITodo,
  ListService,
} from "src/app/shared/services/listService/list.service";

@Component({
  selector: "app-edit-task",
  templateUrl: "./edit-task.component.html",
  styleUrls: ["./edit-task.component.scss"],
})
export class EditTaskComponent implements OnChanges {
  constructor(
    private formBuilder: FormBuilder,
    private listService: ListService
  ) {}

  @Output() todoEmit = new EventEmitter();
  @Input() todo: ITodo = {
    id: 0,
    title: "",
    description: "",
    isEditing: false,
  };

  titleErrorMessage: string = "";

  editingTodoForm = this.formBuilder.group(this.todo);

  changeTodo(): void {
    const validatedForm = validateField(
      this.editingTodoForm.value
    );

    if (this.editingTodoForm.invalid || !validatedForm) {
      this.titleErrorMessage = "Title is required";
      return;
    }

    this.titleErrorMessage = "";
    this.listService.editTodo(this.editingTodoForm.value);
    this.editingTodoForm.value.isEditing = false;
    this.todoEmit.emit();
  }

  ngOnChanges(): void {
    this.editingTodoForm.patchValue(this.todo);
  }
}
