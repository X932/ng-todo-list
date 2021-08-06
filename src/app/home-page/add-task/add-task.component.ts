import {
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FieldValidationService } from "src/app/shared/services/fieldValidation/field-validation.service";
import { ListService } from "../../shared/services/listService/list.service";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"],
})
export class AddTaskComponent {
  @ViewChild("title") inputTitleRef?: ElementRef;

  addingTodoForm = this.formBuilder.group({
    id: 0,
    title: "",
    description: "",
    isEditing: false,
  });

  constructor(
    private listService: ListService,
    private formBuilder: FormBuilder,
    private fieldValidationService: FieldValidationService
  ) {}

  onSubmit(): void {
    const validatedForm =
      this.fieldValidationService.validateFields(
        this.addingTodoForm
      );

    if (validatedForm) {
      this.listService.addTodo(validatedForm);
      this.inputTitleRef?.nativeElement.focus();
    }
    this.addingTodoForm.reset();
  }
}
