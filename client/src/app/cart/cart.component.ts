import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { render } from 'creditcardpayments/creditCardPayments';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;
  totalPrice?: any;

  constructor(private cartService: CartService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.items.forEach(element => {
      const value = localStorage.getItem(element.productName);
      if (value) {
        element = value;
      }
    })
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
          if (this.totalPrice == 0) {
            this.toastr.error('Your cart is empty');
          }
          this.toastr.success('Payment Successful');
        },
      });
    }, 5);

    if (this.totalPrice == 0) {
      this.toastr.error('Your cart is empty');
    }
  }
}
