import { createSelector } from '@ngrx/store';

import { Todo } from '@models/todo.model';
import { AppState } from '@store/app.reducer';

export const getTodos = (state: AppState) => state.todos;

export const getVisibleTodos = createSelector(
  getTodos,
  (todos: Todo[]) => {
    return todos;
  }
);
