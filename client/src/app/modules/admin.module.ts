import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAddComponent } from '../admin/products-add/products-add.component';
import { ProductsEditComponent } from '../admin/products-edit/products-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared.module';
import { ProductsComponent } from '../products/products.component';
import { ProductAddChangesGuard, ProductEditChangesGuard } from '../guards/admin.guard';


const routes: Routes = [
  { path: '', component: ProductsComponent},
  { path: 'addproduct', component: ProductsAddComponent,canDeactivate: [ProductAddChangesGuard] },
  { path: 'edit/:productId', component: ProductsEditComponent ,canDeactivate: [ProductEditChangesGuard] },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    ProductsEditComponent,
    ProductsAddComponent,
  ],
  exports: [
    RouterModule,
    ProductsEditComponent,
    ProductsAddComponent,
    SharedModule
  ]
})
export class AdminModule { }
