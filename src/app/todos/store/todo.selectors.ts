import { createSelector } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { TodosState } from './todos.reducer';

export const getTodos = (state: TodosState) => state.todos;

export const getVisibleTodos = createSelector(
  getTodos,
  (todos: Todo[]) => {
    return todos;
  }
);
