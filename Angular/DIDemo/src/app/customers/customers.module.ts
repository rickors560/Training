import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { API } from '../ApiToken';


@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers: [{provide:API, useValue:{url:"customers.com",password:"12345"}}]
})
export class CustomersModule { }
