import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AsyncsubjectobservableService } from '../asyncsubjectobservable.service';

@Component({
  selector: 'app-asyncsubject-com',
  templateUrl: './asyncsubject-com.component.html',
  styleUrls: ['./asyncsubject-com.component.css']
})
export class AsyncsubjectComComponent implements OnInit, OnDestroy {

  constructor(private asyncsubjectservice:AsyncsubjectobservableService) { }
  
  ngOnInit(): void {
    this.asyncsubjectservice.asyncsubjectObservableFunction();
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

  subscribe1_4() {
    this.observer1$ = this.asyncsubjectservice.count$.subscribe(
      (data: number) => { this.observer1.push(data) },
      null,
      () => {
        console.log("Completed")
        this.showObserver1 = true;
      }
    );
  }
  subscribe2_4() {
    this.observer2$ = this.asyncsubjectservice.count$.subscribe(
      (data: number) => { this.observer2.push(data) },
      null,
      () => {
        console.log("Completed")
        this.showObserver2 = true;
      }
    );
  }
  subscribe3_4() {
    this.observer3$ = this.asyncsubjectservice.count$.subscribe(
      (data: number) => { this.observer3.push(data) },
      null,
      () => {
        console.log("Completed")
        this.showObserver3 = true;
      }
    );
  }
  
  ngOnDestroy(): void {
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
