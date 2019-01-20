import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';

import { TodoService } from './services/todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent,
    TodoComponent,
    TodoDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TodosRoutingModule
  ],
  providers: [
    TodoService
  ]
})
export class TodosModule { }
