import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-rxjsdemo',
  templateUrl: './rxjsdemo.component.html',
  styleUrls: ['./rxjsdemo.component.css']
})
export class RxjsdemoComponent implements OnInit {

  constructor(private subjectservice:SubjectService) {
    
   }

  ngOnInit(): void {
    this.createSubject();
  }
  observer1$ : Subscription;
  observer1: number[] = [];
  observer2$ : Subscription;
  observer2: number[] = [];
  observer3$ : Subscription;
  observer3: number[] = [];
  showObserver1 = false;
  showObserver2 = false;
  showObserver3 = false;
  showSubject = true;
  showBehaviorSubject = false;
  showReplaySubject = false;
  showAsyncSubject = false;
  createSubject(){
    this.subjectservice.subjectObservableFunction();
  }
  createBehaviorSubject(){
    this.observer1$.unsubscribe();
    this.observer2$.unsubscribe();
    this.observer3$.unsubscribe();
    this.subjectservice.behaviorsubjectObservableFunction();
  }
  createReplaySubject(){
    this.subjectservice.replaysubjectObservableFunction();
  }
  createAsyncSubject(){
    this.subjectservice.asyncsubjectObservableFunction();
  }
  subscribe1(){
    this.subjectservice.count$.subscribe(
      (data:number)=>{ this.observer1.push(data) },
      null,
      ()=>{ 
        console.log("Completed") 
        this.showObserver1 = true;
      }
    );
  }
  subscribe2(){
    this.subjectservice.count$.subscribe(
      (data:number)=>{ this.observer2.push(data) },
      null,
      ()=>{ 
        console.log("Completed") 
        this.showObserver2 = true;
      }
    );
  }
  subscribe3(){
    this.subjectservice.count$.subscribe(
      (data:number)=>{ this.observer3.push(data) },
      null,
      ()=>{ 
        console.log("Completed") 
        this.showObserver3 = true;
      }
    );
  }
}
