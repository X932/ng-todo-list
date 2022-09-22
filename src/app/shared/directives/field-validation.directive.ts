import { ITodo } from "../services/listService/list.service";

export const validateField = (value: ITodo): ITodo => {
  value.title = value.title.trim();
  value.description = value.description.trim();

  return value;
};
