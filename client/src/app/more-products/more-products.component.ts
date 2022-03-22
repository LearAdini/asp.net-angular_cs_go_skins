import { Component, OnInit } from '@angular/core';
import { products } from '../models/products';

@Component({
  selector: 'app-more-products',
  templateUrl: './more-products.component.html',
  styleUrls: ['./more-products.component.css']
})
export class MoreProductsComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit(): void { }

}
