import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReplaysubjectobservableService {

  constructor() { }
  counter = 0;
  count$ : Observable<number>;
  private replaysubjectObservable : ReplaySubject<number>;
  replaysubjectObservableFunction(){
    this.counter = 0;
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
      ,1000);
  }
}
