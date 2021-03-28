import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Product';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {

  constructor() { }
  ps:Product[] = []
  ngOnInit(): void {
    this.ps = this.getProduct();
  }
  getProduct(): Product[]{
    return [
      {
        Id: 1,
        Title: "Pen",
        Color: "Red",
        Price: 200,
        ExpiryDate:"1-1-2021",
        Owner: "Me"
      },
      {
        Id: 2,
        Title: "Pencil",
        Color: "Black",
        Price: 100,
        ExpiryDate:"2-1-2021"
      },
      {
        Id: 3,
        Title: "Bat",
        Color: "White",
        Price: 1000,
        ExpiryDate:"3-1-2021"
      },
      {
        Id: 4,
        Title: "Ball",
        Color: "Black",
        Price: 10,
        ExpiryDate:"4-1-2021"
      },
      {
        Id: 5,
        Title: "Market",
        Color: "Green",
        Price: 150,
        ExpiryDate:"5-1-2021"
      }
    ];
  }
}
