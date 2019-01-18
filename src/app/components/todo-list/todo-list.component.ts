import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from '@store/app.reducer';
import { Todo } from '@models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<Todo[]> = this._store.select('todos');

  constructor (
    private _store: Store<AppState>
  ) { }

  ngOnInit() { }

  trackByFn(_index: number, item: Todo): number {
    return item.id;
  }
}
