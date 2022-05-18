import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';
import { AccountEditComponent } from '../account-edit/account-edit.component';
import { CartComponent } from '../cart/cart.component';
import { CheckoutComponent } from '../cart/checkout/checkout.component';
import { AccountOrdersComponent } from '../account-edit/account-orders/account-orders.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    AccountEditComponent,
    AccountOrdersComponent,
    CartComponent,
    CheckoutComponent
  ],
  exports: [
    SharedModule,
    AccountEditComponent,
    AccountOrdersComponent,
    CartComponent,
    CheckoutComponent
  ]
})
export class AccountModule { }
