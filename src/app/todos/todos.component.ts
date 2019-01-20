import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { tap } from 'rxjs/operators';

import { TodoService } from './services/todo.service';
import { TodosState } from './store/todos.reducer';
import * as TodoActions from './store/todo.actions';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  title: string;

  constructor (
    private _store: Store<TodosState>,
    private _todoService: TodoService
  ) {
    this.populateTodos();
  }

  private populateTodos() {
    this._todoService.getTodos().subscribe((todos) => {
      this._store.dispatch(new TodoActions.PopulateTodosAction(todos));
    });
  }
}
