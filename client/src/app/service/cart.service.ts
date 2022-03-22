import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartItem } from '../models/CartItem';


import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;
  items: Product[] = [];
  product!: Product;
  baseUrl = environment.apiUrl;
  private currentItems$ = new ReplaySubject<Product | null>(1);
  currentItem$ = this.currentItems$.asObservable();

  constructor() { }

  addToCart(product: Product){
    return this.items.push(product);
  }

  setCartItems(product: Product) {
    localStorage.setItem('product', JSON.stringify(product));
    this.currentItems$.next(product);
  }

  getPrice() {
    let total = 0;
    for (let item of this.items) {
      total += (item.price - (item.price * item.sale / 100));
    }
    return total.toFixed(2).toString();
  }

  getProudctPrice() {
    const total = (this.product?.price - (this.product?.price * this.product?.sale / 100)).toFixed(2);
    return total;
  }

  getItems() {
    const itemFromLS: any = localStorage.getItem('product');
    const item = JSON.parse(itemFromLS);
    this.setCartItems(item);
    return this.items;
  }

  clearProduct(index: number) {
    this.items.splice(index, 1);
  }
}
