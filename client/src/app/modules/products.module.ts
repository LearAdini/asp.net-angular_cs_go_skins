import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';
import { ProductsComponent } from '../products/products.component';
import { SharedModule } from './shared.module';
import { SimilarProductsComponent } from '../products/similar-products/similar-products.component';
import { RouterModule } from '@angular/router';

const routes = [
     { path: 'products/:productId', component: ProductDetailsComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    SimilarProductsComponent,
  ],
  exports: [
    RouterModule,
    ProductsComponent,
    ProductDetailsComponent,
    SimilarProductsComponent,
    SharedModule
  ]
})

export class ProductsModule { }
