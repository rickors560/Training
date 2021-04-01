import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../products/IProduct';
import { IPurchaseItem } from '../purchase/IPurchaseItem';

@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.css']
})
export class PurchaseorderComponent implements OnInit , OnChanges {

  constructor() { }
  ngOnInit(): void {
  }
  item: IProduct[];
  price = 0;
  id : number;
  @Input() productdetails: IPurchaseItem;
  @Output() sendProductDataEvent = new EventEmitter();
  ngOnChanges(){
    console.log(this.productdetails);
     this.productdetails.Items.forEach(i => {
       this.price = this.price + i.Price*i.Quantity;
     });
  }

  sendProductData():void{
    this.sendProductDataEvent.emit();
  }
}
