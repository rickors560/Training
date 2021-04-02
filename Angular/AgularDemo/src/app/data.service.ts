import { Injectable } from '@angular/core';
import { IProduct } from './products/IProduct';
import { IPurchaseItem } from './purchase/IPurchaseItem';

@Injectable()
export class DataService {

  constructor() { }
  servicegetPurchase():IPurchaseItem[]{
    return [{
      Purchase_ID : 1,
      Purchase_Name : "Taazaa" ,
      Purchase_Date : "07-25-2021",
      VendorName : "WallMart",
      Items : [
        {Id: 1,
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
          ExpiryDate: "05-01-2021",
          Quantity: 20,
          isInstock: false
        }
      ]
    },
    {
      Purchase_ID : 2,
      Purchase_Name : "Google" ,
      Purchase_Date : "02-02-2021",
      VendorName : "Amazon",
      Items : [
        {Id: 1,
        Name: "Pen",
        Price: 100,
        ExpiryDate: "12-01-2021",
        Quantity: 10,
        isInstock: true
        },
        {
          Id: 4,
          Name: "Marker",
          Price: 45,
          ExpiryDate: "10-08-2021",
          Quantity: 0,
          isInstock: false
        }
      ]
    },
    {
      Purchase_ID : 3,
      Purchase_Name : "MicroSoft" ,
      Purchase_Date : "01-12-2021",
      VendorName : "FlipKart",
      Items : [
        {
          Id: 2,
          Name: "Pencil",
          Price: 20,
          ExpiryDate: "05-01-2021",
          Quantity: 20,
          isInstock: false
        },
        {
          Id: 5,
          Name: "Bat",
          Price: 1000,
          ExpiryDate: "06-09-2021",
          Quantity: 5,
          isInstock: true
        },
        {
          Id: 3,
          Name: "Eraser",
          Price: 5,
          ExpiryDate: "12-10-2021",
          Quantity: 50,
          isInstock: true
        }
      ]
    }
    ];
  }
  servicegetProducts():IProduct[]{
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
        ExpiryDate: "05-01-2021",
        Quantity: 20,
        isInstock: false
      },
      {
        Id: 3,
        Name: "Eraser",
        Price: 5,
        ExpiryDate: "12-10-2021",
        Quantity: 50,
        isInstock: true
      },
      {
        Id: 4,
        Name: "Marker",
        Price: 45,
        ExpiryDate: "10-08-2021",
        Quantity: 0,
        isInstock: false
      },
      {
        Id: 5,
        Name: "Bat",
        Price: 1000,
        ExpiryDate: "06-09-2021",
        Quantity: 5,
        isInstock: true
      }
    ]
  }
}