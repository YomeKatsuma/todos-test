import { Todo } from '../models/todo.model';

import * as TodoActions from './todo.actions';

const initialState: Todo[] = [];

export function TodosReducer(state: Todo[] = initialState, action: TodoActions.TodoActionType) {
  switch (action.type) {
    case TodoActions.POPULATE_TODOS: {
      return action.todos;
    }
    default: {
      return state;
    }
    case TodoActions.TOGGLE_TODO: {
      return state.map(todo => {
        if (action.id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });
    }
  }
}
