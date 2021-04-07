import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { SharedataComponent } from './sharedata/sharedata.component';
import {MatTableModule} from '@angular/material/table';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import { MydirectiveDirective } from './mydirective.directive';
import { HomeComponent } from './home/home.component';
import { GlobalerrorhandlerComponent } from './globalerrorhandler/globalerrorhandler.component';
import { LoginComponent } from './login/login.component';
import { ProductsearchPipe } from './productsearch.pipe';
import { ProductpricesearchPipe } from './productpricesearch.pipe';
import { SubjectComComponent } from './subject-com/subject-com.component';
import { BehaviorsubjectComComponent } from './behaviorsubject-com/behaviorsubject-com.component';
import { ReplaysubjectComComponent } from './replaysubject-com/replaysubject-com.component';
import { AsyncsubjectComComponent } from './asyncsubject-com/asyncsubject-com.component';
@NgModule({
  declarations: [
    AppComponent,
    TShirtDemoComponent,
    ProductsComponent,
    PurchaseComponent,
    PurchaseorderComponent,
    Comp1Component,
    Comp2Component,
    SharedataComponent,
    AttributedirectiveComponent,
    MydirectiveDirective,
    HomeComponent,
    GlobalerrorhandlerComponent,
    LoginComponent,
    ProductsearchPipe,
    ProductpricesearchPipe,
    SubjectComComponent,
    BehaviorsubjectComComponent,
    ReplaysubjectComComponent,
    AsyncsubjectComComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    ReactiveFormsModule 
  ],
  providers: [DataService,
    {provide:ErrorHandler, useClass:MyErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
