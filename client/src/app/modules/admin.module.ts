import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAddComponent } from '../admin/products-add/products-add.component';
import { ProductsEditComponent } from '../admin/products-edit/products-edit.component';
import { SharedModule } from './shared.module';
import { AdminPanelComponent } from '../admin/admin-panel/admin-panel.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ProductsEditComponent,
    ProductsAddComponent,
    AdminPanelComponent
  ],
  exports: [
    ProductsEditComponent,
    ProductsAddComponent,
    AdminPanelComponent,
    SharedModule
  ]
})
export class AdminModule { }
