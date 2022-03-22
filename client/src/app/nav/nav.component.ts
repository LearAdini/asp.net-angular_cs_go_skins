import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  currentUser$: Observable<User | null>;
  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
    ) { this.currentUser$ = this.accountService.currentUser$; }

  ngOnInit(): void { }

  login() {
  this.accountService.login(this.model)
  .subscribe(() => {
    this.router.navigateByUrl('/products');
    this.toastr.success('Login successful');
});}

logout() {
  this.spinner.show();
  setTimeout(() => {
    this.router.navigateByUrl('/').then(() => {window.location.reload();});
    this.accountService.logout();
    this.spinner.hide();
  }, 1500);
}


}
