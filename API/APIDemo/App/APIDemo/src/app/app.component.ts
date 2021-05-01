import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';
import { Product } from './IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'APIDemo';
  products:Product[] = [];
  productsubscription : Subscription;
  constructor (private appservice: AppService){
  }
  ngOnInit(){
    this.productsubscription = this.appservice.getProducts().subscribe(
      data => this.products = data,
      error => console.log(error),
      () => console.log('completed')
    );
  }
}
