import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FieldValidationService } from "src/app/shared/services/fieldValidation/field-validation.service";
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
    private listService: ListService,
    private fieldValidationService: FieldValidationService
  ) {}

  @Output() todoEmit = new EventEmitter();
  @Input() todo: ITodo = {
    id: 0,
    title: "",
    description: "",
    isEditing: false,
  };

  editingTodoForm = this.formBuilder.group(this.todo);

  changeTodo(): void {
    const validatedForm =
      this.fieldValidationService.validateFields(
        this.editingTodoForm
      );

    if (validatedForm) {
      this.listService.editTodo(validatedForm);
      this.editingTodoForm.value.isEditing = false;
      this.todoEmit.emit();
    }
  }

  ngOnChanges(): void {
    this.editingTodoForm.patchValue(this.todo);
  }
}
