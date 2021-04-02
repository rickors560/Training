import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TShirtDemoComponent } from './t-shirt-demo/t-shirt-demo.component';
import { ProductsComponent } from './products/products.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { DataService } from './data.service';
import { MyErrorHandlerService } from './my-error-handler.service';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    TShirtDemoComponent,
    ProductsComponent,
    PurchaseComponent,
    PurchaseorderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [DataService,
    {provide:ErrorHandler, useClass:MyErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
