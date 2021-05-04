import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppService } from './app.service';
import { IToDoItem } from './IToDoItems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TodoItem';
  todoitems$: Observable<IToDoItem[]>;
  user: string = 'Ritik';
  task: string;
  constructor(private myappservice: AppService) {
    this.todoitems$ = new Observable<IToDoItem[]>();
  }
  ngOnInit() {
    this.todoitems$ = this.myappservice.getToDoItems();
  }

  add() {
    var date = new Date();
    var item: IToDoItem = {
      name: this.task,
      isComplete: false,
      createdOn: date.toJSON()
    }
    this.todoitems$ = this.myappservice.postToDoItem(item).pipe(
      switchMap(() => { return this.myappservice.getToDoItems() }) // run only when about request is successfully returning something
    );
    this.task = '';
  }
  updateStatus(item: IToDoItem) {
    if (item.isComplete) {
      item.isComplete = false;
    }
    else {
      item.isComplete = true;
    }
    this.todoitems$ =  this.myappservice.putToDoItem(item).pipe(
      switchMap(() => { return this.myappservice.getToDoItems() }) // run only when about request is successfully returning something
    );
  }
  delete(item: IToDoItem) {
    this.todoitems$ = this.myappservice.deleteToDoItem(item).pipe(
      switchMap(() => { return this.myappservice.getToDoItems() }) // run only when about request is successfully returning something
    );
  }
}