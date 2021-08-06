import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ITodo } from "../listService/list.service";

@Injectable({
  providedIn: "root",
})
export class FieldValidationService {
  validateFields({ value }: FormGroup): ITodo | null {
    const title: string =
      value.title?.trim() || "Default title";
    const description: string =
      value.description?.trim() || "";

    value.title = title;
    value.description = description;

    if (
      (title && title !== "Default title") ||
      description
    ) {
      return value;
    }
    return null;
  }
  constructor() {}
}
