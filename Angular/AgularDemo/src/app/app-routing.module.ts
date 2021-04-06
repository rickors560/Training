import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import { GlobalerrorhandlerComponent } from './globalerrorhandler/globalerrorhandler.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SharedataComponent } from './sharedata/sharedata.component';
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
    {path:"login", component:LoginComponent}
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