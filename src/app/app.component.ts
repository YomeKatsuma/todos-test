import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { TodoService } from '@services/todo/todo.service';
import { AppState } from '@store/app.reducer';
import * as TodoActions from '@store/todo/todo.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (
    private _store: Store<AppState>,
    private _todoService: TodoService,
  ) {
    this.populateTodos();
  }

  private populateTodos() {
    this._todoService.getTodos().subscribe((todos) => {
      this._store.dispatch(new TodoActions.PopulateTodosAction(todos));
    });
  }
}
