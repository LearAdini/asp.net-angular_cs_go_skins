import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setTime } from 'ngx-bootstrap/chronos/utils/date-setters';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable, take } from 'rxjs';
import { Product } from '../models/products';
import { User } from '../models/user';
import { AccountService } from '../service/account.service';
import { CartService } from '../service/cart.service';
import { CreditService } from '../service/credit.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  currentUser$: Observable<User | null>;
  // currentProducts$: Observable<Product | null>;
  user: User;
  admin: boolean = false;
  products: Product[];
  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { this.currentUser$ = this.accountService.currentUser$;
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      this.user = user as User;

    });
  }

  ngOnInit(): void {
     if(this.user.username == 'Admin')
      {
        this.admin = true;
      }
  }

  login() {

    this.accountService.login(this.model)
      .subscribe(() => {
        if (this.model.username == 'Admin')
        {
          this.admin = true;
          this.router.navigate(['/products']);
          this.toastr.success('Logged in as Admin 👮‍♂️');
        }
        else
        {
          this.router.navigate(['/products']);
        this.toastr.success(`Welcome ${this.model.username} 🎉`);
        }
        // this.loadProducts();
      });
  }

  logout() {

    // setTimeout(() => {
      // window.location.reload();
      this.spinner.show();
      setTimeout(() => {
        this.accountService.logout();
        // localStorage.clear();
        this.router.navigateByUrl('/home').then(() => {window.location.reload();});
       this.spinner.hide();
       },1000);
      // this.cartService.clearCart();
      // this.creditService.removeCurrentCard();
      // this.spinner.hide();
    // }, 1500);
  }

//   loadProducts() {
//     this.productService.getProducts().subscribe(x => {
//       this.products = x;
//     });
// }
}
