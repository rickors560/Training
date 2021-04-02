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
  products: IProduct[] = [];
  getProducts():IProduct[]{
    return this.myDataService.servicegetProducts();
  }
}
