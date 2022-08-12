import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './products/products.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [ProductListComponent, ProductComponent];
