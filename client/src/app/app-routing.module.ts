

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { AdminGuard, ProductAddChangesGuard, ProductEditChangesGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { ProductsAddComponent } from './admin/products-add/products-add.component';
import { ProductsEditComponent } from './admin/products-edit/products-edit.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AccountEditComponent } from './account/account-edit/account-edit.component';


  const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: '',
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [
    { path: 'products', component: ProductsComponent },
    { path: 'products/:productId', component: ProductDetailsComponent},
    { path: 'account', component: AccountEditComponent},
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    ]},

    { path: '',
    canActivate: [AdminGuard],
    runGuardsAndResolvers: 'always',
    children:[
    { path: 'products', component: ProductsComponent},
    { path: 'addproduct', component: ProductsAddComponent,canDeactivate: [ProductAddChangesGuard] },
  { path: 'edit/:productId', component: ProductsEditComponent ,canDeactivate: [ProductEditChangesGuard] },
  { path: 'admin-panel', component: AdminPanelComponent },]}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
