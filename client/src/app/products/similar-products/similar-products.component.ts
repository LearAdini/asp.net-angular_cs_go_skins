import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/products';
import { ProductService } from '../../service/product.service';


@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.css']
})
export class SimilarProductsComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService,private router: Router) {
    this.productService.getProducts().subscribe(x=>{
     this.products = x;
    })
  }
  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}
