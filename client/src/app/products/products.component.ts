import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { products } from '../models/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = products;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    // this.spinner.show();

    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 1000);
  }

}
