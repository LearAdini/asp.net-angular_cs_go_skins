import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { Product } from './models/products';
import { AccountService } from './service/account.service';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentProduct$: Observable<Product | null>;
  constructor(private accountService:AccountService,private cartService:CartService) {
    this.currentProduct$ = this.cartService.currentItem$;
  }

  ngOnInit() {
    this.setCurrentUser();
  }



  setCurrentUser() {
    const userFromLS:any = localStorage.getItem('user');
    const user = JSON.parse(userFromLS);
    this.accountService.setCurrentUser(user);
  }

  // setCurrentItem(){
  //   const itemsFromLS:any = localStorage.getItem('items');
  //   const item = JSON.parse(itemsFromLS);
  //   this.cartService.setCurrentItems(item);
  // }

}
