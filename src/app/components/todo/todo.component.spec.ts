import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

import { Store, StoreModule } from '@ngrx/store';

import { AppState, rootReducer } from '@store/app.reducer';

import { TodoComponent } from './todo.component';

@Component({
  selector: 'app-test-cmp',
  template: ''
})
export class TestComponent { }

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoComponent,
        TestComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: TestComponent }
        ]),
        StoreModule.forRoot(rootReducer),
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    component.todo = {
      id: 1,
      title: 'test todo',
      completed: true
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
