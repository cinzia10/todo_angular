import { Component, Input, OnInit } from '@angular/core';
import { TodoClass } from 'src/model/todo-class';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todos: TodoClass[];

  constructor() {
    this.todos = [];
   }

  ngOnInit(): void {
  }

  manageTodoEmission(todo:TodoClass){
    console.log('avvenuta emissione', todo.name)
  }

}
