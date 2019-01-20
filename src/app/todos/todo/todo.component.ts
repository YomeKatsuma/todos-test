import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { TodosState } from '../store/todos.reducer';
import * as TodoActions from '../store/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  @Input()
  get todo(): Todo {
    return this._todo;
  }
  set todo(todo: Todo) {
    this._todo = todo;
    this.stateIcon = this._todo.completed ? 'done' : '';
  }
  private _todo: Todo;

  stateIcon: string;

  constructor (
    private _changeDetection: ChangeDetectorRef,
    private _store: Store<TodosState>,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.stateIcon = this.todo.completed ? 'done' : '';
  }

  toggleTodoState() {
    const action = new TodoActions.ToggleAction(this.todo.id);
    this._store.dispatch(action);
  }

  displayDetail() {
    console.log('displatDetail ', this._todo);
    this._router.navigate(['/', { id: this.todo.id }]);
  }
}
