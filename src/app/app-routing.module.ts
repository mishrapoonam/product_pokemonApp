import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './pokemon/component/product-list/product-list.component';
import { ProductDetailsComponent } from './pokemon/component/product-details/product-details.component';

const routes: Routes = [
{ path : 'productList', component : ProductListComponent},
{ path : 'productDetail', component : ProductDetailsComponent},
{ path : '', redirectTo : '/productList', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
