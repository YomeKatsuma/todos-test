import { ActionReducerMap } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { TodosReducer } from './todo.reducer';

export interface TodosState {
  todos: Todo[];
}

export const todosReducer: ActionReducerMap<TodosState> = {
  todos: TodosReducer
};
