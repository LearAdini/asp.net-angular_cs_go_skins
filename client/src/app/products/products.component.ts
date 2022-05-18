import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { take } from 'rxjs';
import { Product } from '../models/products';
import { User } from '../models/user';
import { AccountService } from '../service/account.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  user: User;
  admin: boolean = false;
  searchText: any;
  p: number;
  value: number = 5;
  highValue: number = 33300;
  options: Options = {
    floor: 4,
    ceil: 33300,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> $' + value;
        case LabelType.High:
          return '<b>Max price:</b> $' + value;
        default:
          return '$' + value;
      }
    }
  };


  constructor(private productService: ProductService, private accountService: AccountService, private spinner: NgxSpinnerService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      this.user = user as User;
    });
    this.loadProducts();
  }

  ngOnInit(): void {
    if (this.user.username == 'Admin') {
      this.admin = true;
    }
  }

  loadProducts() {
    this.productService.getProducts().subscribe(x => {
      this.products = x;

      this.products.forEach(product => {
        product.productPrice = product.productPrice - (product.productPrice * product.productSale / 100);
        // console.log(Math.min(...this.products.map(x => x.productPrice)));
        // console.log(Math.max(...this.products.map(x => x.productPrice)));
      })
    });
  }
}
