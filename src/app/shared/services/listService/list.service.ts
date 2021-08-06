import { Injectable } from "@angular/core";

export interface ITodo {
  id: number;
  title: string;
  description: string;
  isEditing: boolean;
}

export class ListService {
  todoList: ITodo[] = [
    // {
    //   id: 1,
    //   title: "Title 1",
    //   description: "Desc 1",
    //   isEditing: false,
    // },
    // {
    //   id: 2,
    //   title: "Title 2",
    //   description: "Desc 2",
    //   isEditing: false,
    // },
    // {
    //   id: 3,
    //   title: "Title 3",
    //   description: "Desc 3",
    //   isEditing: false,
    // },
    // {
    //   id: 4,
    //   title: "Title 4",
    //   description: "Desc 4",
    //   isEditing: false,
    // },
  ];
  counter: number = 0;

  editTodo(newTodo: ITodo): void {
    this.todoList = this.todoList.map((todo) => {
      if (todo.id === newTodo.id) {
        return newTodo;
      }

      return todo;
    });
  }

  addTodo(todo: ITodo): void {
    this.counter++;
    todo.id = this.counter;

    this.todoList.unshift(todo);
  }

  getTodoList(): ITodo[] {
    return this.todoList;
  }

  deleteTodo(todoId: number): void {
    this.todoList = this.todoList.filter(
      (todo) => todo.id !== todoId
    );
  }

  constructor() {}
}
