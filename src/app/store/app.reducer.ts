import { ActionReducerMap } from '@ngrx/store';

import { TodosReducer } from '@store/todo/todo.reducer';
import { Todo } from '@models/todo.model';

export interface AppState {
  todos: Todo[];
}

export const rootReducer: ActionReducerMap<AppState> = {
  todos: TodosReducer
};
