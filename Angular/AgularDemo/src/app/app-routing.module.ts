import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncsubjectComComponent } from './asyncsubject-com/asyncsubject-com.component';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import { BehaviorsubjectComComponent } from './behaviorsubject-com/behaviorsubject-com.component';
import { GlobalerrorhandlerComponent } from './globalerrorhandler/globalerrorhandler.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ReplaysubjectComComponent } from './replaysubject-com/replaysubject-com.component';
import { SharedataComponent } from './sharedata/sharedata.component';
import { SubjectComComponent } from './subject-com/subject-com.component';
import { TShirtDemoComponent } from './t-shirt-demo/t-shirt-demo.component';

const routes: Routes = [
    {path: "", redirectTo:"home", pathMatch:"full"},
    {path: "home", component:HomeComponent},
    {path:"data-binding", component:TShirtDemoComponent},
    {path:"products", component:ProductsComponent},
    {path:"purchase", component:PurchaseComponent},
    {path:"shareData", component:SharedataComponent},
    {path:"attributedirective", component:AttributedirectiveComponent},
    {path:"globalerrorhandler", component:GlobalerrorhandlerComponent},
    {path:"login", component:LoginComponent},
    {path:"subject", component:SubjectComComponent},
    {path:"behavioursubject",component:BehaviorsubjectComComponent},
    {path:"replaysubject",component:ReplaysubjectComComponent},
    {path:"asyncsubject",component:AsyncsubjectComComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }