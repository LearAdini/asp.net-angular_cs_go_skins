import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../models/products';
import { CartService } from '../service/cart.service';
import { render } from 'creditcardpayments/creditCardPayments';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  // item: Product[] = [];
  totalPrice?: any;

  constructor(private cartService: CartService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.totalPrice = this.cartService.getTotalPrice();
    this.payPalButton();
  }

  removeItem(index: number) {
    this.cartService.clearProduct(index);
    this.totalPrice = this.cartService.getTotalPrice();

    let pay = window.document.querySelector('#myPaypalButtons');
    pay!.innerHTML = '';
    this.payPalButton();
  }

  payPalButton() {

    setTimeout(() => {
      render({
        id: "#myPaypalButtons",
        currency: "USD",
        value: this.cartService.getTotalPrice(),


        onApprove: () => {
          if(this.totalPrice == 0) {
            this.toastr.error('Your cart is empty');
          }
          this.toastr.success('Payment Successful');
        },
      });
    }, 5);

    if(this.totalPrice == 0) {
      this.toastr.error('Your cart is empty');
  }
}
}
