import {
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { validateField } from "src/app/shared/directives/field-validation.directive";
import { ListService } from "../../shared/services/listService/list.service";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"],
})
export class AddTaskComponent {
  @ViewChild("title") inputTitleRef?: ElementRef;

  public titleErrorMessage: string = "";

  private defaultFormValue = {
    id: 0,
    title: "",
    description: "",
    isEditing: false,
  };

  public addingTodoForm = this.formBuilder.group({
    id: [0],
    title: ["", Validators.required],
    description: [""],
    isEditing: [false],
  });

  constructor(
    private listService: ListService,
    private formBuilder: FormBuilder
  ) {}

  public onSubmit(): void {
    const validatedForm = validateField(
      this.addingTodoForm.value
    );
    this.addingTodoForm.patchValue(validatedForm);

    if (this.addingTodoForm.invalid) {
      this.titleErrorMessage = "Title is required";
      this.inputTitleRef?.nativeElement.focus();
      return;
    }

    this.titleErrorMessage = "";
    this.listService.addTodo(this.addingTodoForm.value);
    this.inputTitleRef?.nativeElement.focus();
    this.addingTodoForm.reset(this.defaultFormValue);
  }
}
