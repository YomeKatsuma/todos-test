import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { Store, StoreModule } from '@ngrx/store';

import { MaterialModule } from '../material.module';

import { TodosState, todosReducer } from '../store/todos.reducer';
import * as TodoActions from '../store/todo.actions';

import { TodoComponent } from '../todo/todo.component';
import { TodoListComponent } from './todo-list.component';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-test-cmp',
  template: ''
})
export class TestComponent { }

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let store: Store<TodosState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        TodoComponent,
        TestComponent
      ],
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes([
          { path: '', component: TestComponent }
        ]),
        StoreModule.forRoot(todosReducer)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should order Todos - completed at the end of the list', () => {
    const todos: Todo[] = [{
      id: 1,
      title: 'completed Todo',
      completed: true
    }, {
      id: 1,
      title: 'a Todo',
      completed: false
    }, {
      id: 1,
      title: 'a Todo',
      completed: false
    }];
    const action = new TodoActions.PopulateTodosAction(todos);
    store.dispatch(action);
    expect(component.todos[2].completed).toBeTruthy();
  });
});
