import { Action } from '@ngrx/store';

import { Todo } from '../../models/todo.model';

export const POPULATE_TODOS = '[TODO] populate';

export class PopulateTodosAction implements Action {
  readonly type = POPULATE_TODOS;

  constructor (
    public todos: Todo[]
  ) { }
}

export type TodoActionType = PopulateTodosAction;
