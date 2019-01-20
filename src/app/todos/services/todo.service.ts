import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MOCKED_TODOS } from '../mocks/todos';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor () { }

  getTodos(): Observable<Todo[]> {
    return of(MOCKED_TODOS);
  }

  getTodo(id: number): Observable<Todo> {
    return of(MOCKED_TODOS.filter(todo => todo.id === id)[0]);
  }
}
