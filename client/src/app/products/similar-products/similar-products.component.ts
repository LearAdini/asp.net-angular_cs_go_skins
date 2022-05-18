import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, products } from '../../models/products';
import { ProductService } from '../../service/product.service';


@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.css']
})
export class SimilarProductsComponent implements OnInit {
  products: Product[];
  //products = products; // *Read Please* Only here fethcing products from an object within Product model instead of
  //from a service beacuse I dont want to load to the 'similar products' wrapper
  //the products from the service otherwise ill have to make two requests to get the products.
  // so I made an object inside products.ts to dispaly one of the items in a random order
  //(each refresh will display new items in similar products),

  // *** while the product details page it self will get the product data from the database ! and not from the object. ***
  constructor(private productService: ProductService) {
    // constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(x=>{
     this.products = x;
    })
  }
  ngOnInit(): void {}
}
