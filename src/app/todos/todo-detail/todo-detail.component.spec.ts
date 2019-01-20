import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../material.module';

import { TodoDetailComponent } from './todo-detail.component';
import { todosReducer } from '../store/todos.reducer';

@Component({
  selector: 'app-test-cmp',
  template: ''
})
export class TestComponent { }

describe('TodoDetailComponent', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoDetailComponent,
        TestComponent
      ],
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes([
          { path: '1', component: TestComponent }
        ]),
        StoreModule.forRoot(todosReducer)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
