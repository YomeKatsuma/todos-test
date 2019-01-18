import { Action } from '@ngrx/store';

import { Todo } from '../../models/todo.model';

export const POPULATE_TODOS = '[TODO] populate';
export const TOGGLE_TODO = '[TODO] toggle';

export class PopulateTodosAction implements Action {
  readonly type = POPULATE_TODOS;

  constructor (
    public todos: Todo[]
  ) { }
}

export class ToggleAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor (
    public id: number
  ) { }
}

export type TodoActionType =
  PopulateTodosAction |
  ToggleAction;
