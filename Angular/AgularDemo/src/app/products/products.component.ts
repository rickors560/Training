import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.products = this.getProducts();
    console.log(this.products);
  }
  products: IProduct[] = [];
  getProducts():IProduct[]{
    return [
      {
        Id: 1,
        Name: "Pen",
        Price: 100,
        ExpiryDate: "12-01-2021",
        Quantity: 10,
        isInstock: true
      },
      {
        Id: 2,
        Name: "Pencil",
        Price: 20,
        ExpiryDate: "25-01-2021",
        Quantity: 20,
        isInstock: false
      },
      {
        Id: 3,
        Name: "Eraser",
        Price: 5,
        ExpiryDate: "22-10-2021",
        Quantity: 50,
        isInstock: true
      },
      {
        Id: 4,
        Name: "Marker",
        Price: 45,
        ExpiryDate: "14-08-2021",
        Quantity: 0,
        isInstock: false
      },
      {
        Id: 5,
        Name: "Bat",
        Price: 1000,
        ExpiryDate: "16-09-2021",
        Quantity: 5,
        isInstock: true
      }
    ]
  }
}
