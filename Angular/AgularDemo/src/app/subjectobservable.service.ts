import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectobservableService {

  constructor() { }
  counter = 0;
  count$ : Observable<number>;
  private subjectObservable : Subject<number>;
  subjectObservableFunction(){
    this.counter = 0;
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
}
