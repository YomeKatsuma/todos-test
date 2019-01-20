import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo$: Observable<Todo>;

  constructor (
    private _route: ActivatedRoute,
    private _router: Router,
    private _todoService: TodoService
  ) { }

  ngOnInit() {
    this.todo$ = this._route.paramMap.pipe(
      switchMap((params: ParamMap) => this._todoService.getTodo(+params.get('id')))
    );
  }

  handleBack() {
    this._router.navigateByUrl('/todos');
  }
}
