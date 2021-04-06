import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private myDataService : DataService ) { }

  ngOnInit(): void {
    this.products = this.getProducts();
  }
  search: string;
  searchPrice: number;

  displayedColumns : string[] = ['Id', 'Name','Price', 'ExpiryDate','Quantity','In-Stock'];

  products: IProduct[] = [];

  getProducts():IProduct[]{
    return this.myDataService.servicegetProducts();
  }

  showHtmlbool = true;
  showMaterialbool = false;
  showHtmlTable(){
    this.showHtmlbool = true;
    this.showMaterialbool = false;
  }
  showMaterialTable(){
    this.showMaterialbool = true;
    this.showHtmlbool = false;
  }

}
