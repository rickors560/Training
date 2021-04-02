import { Component, Input, OnChanges, OnInit, Output, EventEmitter, DoCheck } from '@angular/core';
import { IProduct } from '../products/IProduct';
import { IPurchaseItem } from '../purchase/IPurchaseItem';

@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.css']
})
export class PurchaseorderComponent implements OnInit, OnChanges{

  constructor() { }
  ngOnInit(): void {
  }
  price = 0;
  id : number;
  @Input() productdetails: IPurchaseItem;
  @Output() sendProductDataEvent = new EventEmitter();
  ngOnChanges(){
     this.productdetails.Items.forEach(i => {
       this.price = this.price + i.Price*i.Quantity;
     });
  }
  sendProductData():void{
    
    this.sendProductDataEvent.emit(this.productdetails.Purchase_ID);
  }
  calculatePrice():void{
    this.price = 0;
    this.productdetails.Items.forEach(i => {
      if(i.Price < 0 || i.Price == null){
        i.Price =0;
      }
      if(i.Quantity < 0 || i.Quantity == null){
        i.Quantity =0;
      }
      this.price = this.price + i.Price*i.Quantity;
    });
  }
}