import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   items: Product[] =[];
  [x: string]: any;
  product!: Product;
  baseUrl = environment.apiUrl;
  private currentItems$ = new ReplaySubject<Product | null>(100);
  currentItem$ = this.currentItems$.asObservable();

  constructor()
  {

   }

  addToCart(product: Product) {
    this.setCurrentItems(product);
    this.items.push(product);
  }

  setCurrentItems(product: Product) {
    // Object.values(product).forEach(val => {
      localStorage.setItem(product.productName, JSON.stringify(product));
      this.currentItems$.next(product);
    // });
  }

  getTotalPrice() {
    let total = 0;
    for (let item of this.items) {
      total += (item.productPrice - (item.productPrice * item.productSale / 100));
    }
    return total.toFixed(2).toString();
  }

  getProudctPrice() {
    const total = (this.product?.productPrice - (this.product?.productPrice * this.product?.productSale / 100)).toFixed(2);
    return total;
  }

  getItems() {
    this.getCartData();
    return this.items;
  }

  getCartData() {
    Object.values(this.items).forEach(val => {
      localStorage.getItem(val.productName);
      console.log(val.productName);
      // this.items.push(val);
    });

  }

  clearProduct(index: number) {
    this.items.splice(index, 1);
    this.currentItems$.next(null);
  }

  clearCart() {
    this.items.splice(0, this.items.length);
    this.currentItems$.next(null);
    localStorage.removeItem('items');
  }
}
