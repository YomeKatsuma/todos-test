import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { TodosComponent } from './todos.component';
import { todosReducer } from './store/todos.reducer';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: ':id', component: TodoDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forRoot(todosReducer)
  ],
  exports: [
    RouterModule
  ]
})
export class TodosRoutingModule { }
