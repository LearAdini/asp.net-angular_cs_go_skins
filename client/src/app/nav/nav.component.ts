import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable, take } from 'rxjs';
import { Product } from '../models/products';
import { User } from '../models/user';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  user: User;
  products: Product[];

  currentUser$: Observable<User | null>;
  admin: boolean = false;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    this.currentUser$ = this.accountService.currentUser$;
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      this.user = user as User;
      if (this.user?.username == 'Admin') {
        this.admin = true;
      }
    });
  }

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model)
      .subscribe(() => {
        if (this.model?.username == 'Admin') {
          this.router.navigateByUrl('/products');
          this.toastr.success('Logged in as Admin 👮‍♂️');
          this.admin = true;
        }
        else {
          this.router.navigate(['/products']);
          this.toastr.success(`Welcome ${this.model.username} 🎉`);
        }
      });
  }

  logout() {
    this.spinner.show();
    setTimeout(() => {
      this.accountService.logout();
      localStorage.clear();
      this.router.navigateByUrl('/home').then(() => { window.location.reload();});
      this.spinner.hide();
    }, 1000);
  }
}
