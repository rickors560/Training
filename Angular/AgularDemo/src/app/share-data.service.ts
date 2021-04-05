import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './products/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  product : IProduct = 
    {Id: 1,
    Name: "Pen",
    Price: 100,
    ExpiryDate: "12-01-2021",
    Quantity: 10,
    isInstock: true};

    product$: BehaviorSubject<IProduct>;
  constructor() {
      this.product$ = new BehaviorSubject(this.product);
   }
  setPrice(p:number){
    this.product.Price = p;
    this.product$.next(this.product);
  }
}