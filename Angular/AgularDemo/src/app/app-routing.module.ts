import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { TShirtDemoComponent } from './t-shirt-demo/t-shirt-demo.component';

const routes: Routes = [
    {path: "", redirectTo:"data-binding", pathMatch:"full"},
    {path:"data-binding", component:TShirtDemoComponent},
    {path:"products", component:ProductsComponent},
    {path:"purchase", component:PurchaseComponent}
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