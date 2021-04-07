import { Injectable } from '@angular/core';
import { AsyncSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncsubjectobservableService {

  constructor() { }
  counter = 0;
  count$ : Observable<number>;
  private asyncsubjectObservable : AsyncSubject<number>;
  asyncsubjectObservableFunction(){
    this.counter = 0;
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
      ,1000);
  }
}
