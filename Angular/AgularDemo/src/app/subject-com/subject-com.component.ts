import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectobservableService } from '../subjectobservable.service';

@Component({
  selector: 'app-subject-com',
  templateUrl: './subject-com.component.html',
  styleUrls: ['./subject-com.component.css']
})
export class SubjectComComponent implements OnInit, OnDestroy {

  constructor(private subjectservice:SubjectobservableService) { }

  ngOnInit(): void {
    this.subjectservice.subjectObservableFunction();
  }
  observer1$: Subscription;
  observer1: number[] = [];
  observer2$: Subscription;
  observer2: number[] = [];
  observer3$: Subscription;
  observer3: number[] = [];
  
  showObserver1 = false;
  showObserver2 = false;
  showObserver3 = false;

  subscribe1() {
    this.observer1$ = this.subjectservice.count$.subscribe(
      (data: number) => { this.observer1.push(data) },
      null,
      () => {
        console.log("Completed")
        this.showObserver1 = true;
      }
    );
  }
  subscribe2() {
    this.observer2$ = this.subjectservice.count$.subscribe(
      (data: number) => { this.observer2.push(data) },
      null,
      () => {
        console.log("Completed")
        this.showObserver2 = true;
      }
    );
  }
  subscribe3() {
    this.observer3$ = this.subjectservice.count$.subscribe(
      (data: number) => { this.observer3.push(data) },
      null,
      () => {
        console.log("Completed")
        this.showObserver3 = true;
      }
    );
  }

  ngOnDestroy(){
    try{
    this.observer1$.unsubscribe();
    this.observer2$.unsubscribe();
    this.observer3$.unsubscribe();
    }
    catch{
      console.log("Exiting");
    }
  }
}
