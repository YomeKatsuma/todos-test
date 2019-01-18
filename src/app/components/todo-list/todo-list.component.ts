import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from '@store/app.reducer';
import { Todo } from '@models/todo.model';
import { b } from '@angular/core/src/render3';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  todos: Todo[] = [];

  private _subscriptionGetTodos: Subscription;

  constructor (
    private _store: Store<AppState>
  ) {
    this.getTodos();
  }

  ngOnInit() { }

  ngOnDestroy() {
    // TODO use _destroy$ Subject pattern here
    this._subscriptionGetTodos.unsubscribe();
  }

  trackByFn(_index: number, item: Todo): number {
    return item.id;
  }

  private getTodos() {
    this._subscriptionGetTodos = this._store.select('todos').pipe(
      map((todos: Todo[]) => {
        const sorted = todos.sort((a1, a2) => (a1.id - a2.id));
        const completed = sorted.filter(todo => todo.completed);
        const uncompleted = sorted.filter(todo => !todo.completed);
        return uncompleted.concat(completed);
      })
    ).subscribe(todos => {
      this.todos = todos;
    });
  }
}
