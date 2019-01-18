import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

import { Store } from '@ngrx/store';

import { Todo } from '@models/todo.model';
import { AppState } from '@store/app.reducer';
import * as TodoActions from '@store/todo/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;

  stateIcon: string;

  constructor (
    private _changeDetection: ChangeDetectorRef,
    private _store: Store<AppState>
  ) { }

  ngOnInit() {
    this.stateIcon = this.todo.completed ? 'done' : '';
  }
}
