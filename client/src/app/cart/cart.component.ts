import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../models/products';
import { CartService } from '../service/cart.service';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  item: Product[] = [];
  totalPrice?: any;

  constructor(private cartService: CartService) {
    setTimeout(() => {
      render({
        id: "#myPaypalButtons",
        currency: "USD",
        value: this.cartService.getPrice(),
        onApprove: () => {
          alert('Success');
        }
      });
    }, 5);

  }

  ngOnInit(): void {
    this.totalPrice = this.cartService.getPrice();

  }

  removeItem(index: number) {
    this.cartService.clearProduct(index);
    this.totalPrice = this.cartService.getPrice();

    this.payPalButton();
  }

  payPalButton() {
    let pay = window.document.querySelector('#myPaypalButtons');
    pay!.innerHTML = '';

    setTimeout(() => {
      render({
        id: "#myPaypalButtons",
        currency: "USD",
        value: this.cartService.getPrice(),
        onApprove: () => {
          alert('Success');
        }
      });
    }, 5);
  }
}
