import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../service/account.service';
import { ProductsEditComponent } from '../admin/products-edit/products-edit.component';
import { ProductsAddComponent } from '../admin/products-add/products-add.component';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate  {

  constructor(
    private accountService:AccountService,
    private toastr:ToastrService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (user!.username === 'Admin') return true;

        this.toastr.error('Woopsie, you are not an admin 🔐');
        this.router.navigateByUrl('/products');
        return false;
      })
    )
  }

}

@Injectable({
  providedIn: 'root'
})
export class ProductEditChangesGuard implements CanDeactivate<ProductsEditComponent> {

  canDeactivate(
    component: ProductsEditComponent): boolean {
    if(component.editForm.dirty){
      return confirm("Are you sure you want to continue? any unsaved changes will be lost...")
    }
    return true;
  }
}
@Injectable({
  providedIn: 'root'
})
export class ProductAddChangesGuard implements CanDeactivate<ProductsAddComponent> {

  canDeactivate(
    component: ProductsAddComponent): boolean {
    if(component.addForm.dirty){
      return confirm("Are you sure you want to continue? any unsaved changes will be lost...")
    }
    return true;
  }
}
