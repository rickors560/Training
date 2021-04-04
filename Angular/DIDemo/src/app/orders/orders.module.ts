import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { API } from '../ApiToken';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers: [{provide:API, useValue:{url:"orders.com",password:"67890"}}]
})
export class OrdersModule { }
