import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IProduct } from '../products/IProduct';
import { IPurchaseItem } from './IPurchaseItem';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit{

  constructor(private myDataService : DataService) {
   }
  PurchaseItems : IPurchaseItem[];
  panelOpenState = false;
  ngOnInit(): void {
    this.PurchaseItems = this.getPurchase();
  }
  getPurchase():IPurchaseItem[]{
    return this.myDataService.servicegetPurchase();
  }
  updatePurchase(m:number){
    let itemlist = "";
    this.PurchaseItems[m-1].Items.forEach(i =>{
      itemlist += "\n Item: " + i.Name + " | Price: " + i.Price + " | Quantity:" + i.Quantity;
    });
    alert(`ORDER PLACED SUCCESSFULLY :)\n
    Purchase Id: ${this.PurchaseItems[m-1].Purchase_ID}
    Purchaser Name: ${this.PurchaseItems[m-1].Purchase_Name}
    Purchase Id: ${this.PurchaseItems[m-1].Purchase_Date}
    Vendor Name: ${this.PurchaseItems[m-1].VendorName}
    \n ITEMS:`+itemlist
    );
  }
}