import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { Store, StoreModule } from '@ngrx/store';

import { AppState, rootReducer } from '@store/app.reducer';

import { TodoComponent } from '@components/todo/todo.component';
import { TodoListComponent } from './todo-list.component';

@Component({
  selector: 'app-test-cmp',
  template: ''
})
export class TestComponent { }

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        TodoComponent,
        TestComponent
      ],
      imports: [
        StoreModule.forRoot(rootReducer)
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
});
