import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorsubjectobservableService {

  constructor() { }
  counter = 0;
  count$ : Observable<number>;
  private behaviorsubjectObservable : BehaviorSubject<number>;
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
      ,1000);
  }
}
