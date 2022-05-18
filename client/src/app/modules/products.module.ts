import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';
import { ProductsComponent } from '../products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared.module';
import { SimilarProductsComponent } from '../products/similar-products/similar-products.component';


const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: ':productId', component: ProductDetailsComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    SimilarProductsComponent,
  ],
  exports: [
    ProductsComponent,
    ProductDetailsComponent,
    SimilarProductsComponent,
    SharedModule
  ]
})
export class ProductsModule { }
