import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { routes } from './app.routing';

import { rootReducer } from '@store/app.reducer';

import { TodoService } from '@services/todo/todo.service';

import { TodoComponent } from '@components/todo/todo.component';
import { TodoListComponent } from '@components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(rootReducer),
    MaterialModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
