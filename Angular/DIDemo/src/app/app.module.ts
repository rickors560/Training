import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { API } from './ApiToken';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LogService } from './log.service';
import { Logv1Service } from './logv1.service';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    {provide:LogService, useClass:Logv1Service},
    {provide:API, useValue:{url:"abc.com",password:"123"}}         
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
