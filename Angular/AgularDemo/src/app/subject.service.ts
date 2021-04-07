import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  counter = 0;
  count$ : Observable<number>;
  private subjectObservable : Subject<number>;
  private behaviorsubjectObservable : BehaviorSubject<number>;
  private replaysubjectObservable : ReplaySubject<number>;
  private asyncsubjectObservable : AsyncSubject<number>;

  constructor() {
   }
  
  subjectObservableFunction(){
    this.subjectObservable = new Subject<number>();
    this.count$ = this.subjectObservable.asObservable();
    setInterval(
      ()=>{
        this.counter = this.counter + 1;
        if (this.counter > 20) {
          this.subjectObservable.complete();
        }
        this.subjectObservable.next(this.counter);
      }
      ,1000);
  }
  behaviorsubjectObservableFunction(){
    this.behaviorsubjectObservable = new BehaviorSubject<number>(this.counter);
    this.count$ = this.behaviorsubjectObservable.asObservable();
    setInterval(
      ()=>{
        this.counter = this.counter + 1;
        if (this.counter > 20) {
          this.behaviorsubjectObservable.complete();
        }
        this.behaviorsubjectObservable.next(this.counter);
      }
      ,2000);
  }
  replaysubjectObservableFunction(){
    this.replaysubjectObservable = new ReplaySubject<number>();
    this.count$ = this.replaysubjectObservable.asObservable();
    setInterval(
      ()=>{
        this.counter = this.counter + 1;
        if (this.counter > 20) {
          this.replaysubjectObservable.complete();
        }
        this.replaysubjectObservable.next(this.counter);
      }
      ,2000);
  }
  asyncsubjectObservableFunction(){
    this.asyncsubjectObservable = new AsyncSubject<number>();
    this.count$ = this.asyncsubjectObservable.asObservable();
    setInterval(
      ()=>{
        this.counter = this.counter + 1;
        if (this.counter > 20) {
          this.asyncsubjectObservable.complete();
        }
        this.asyncsubjectObservable.next(this.counter);
      }
      ,2000);
  }
}
