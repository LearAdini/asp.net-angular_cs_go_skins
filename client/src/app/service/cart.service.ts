import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  constructor() {
    // this.items = this.getItems();
  }

  addToCart(product: Product) {
    localStorage.setItem(product.name, JSON.stringify(product));
    this.currentItems$.next(product);
    this.items.push(product);
  }

  // setCartItems(product: Product) {

  //   localStorage.setItem(product.name, JSON.stringify(product));
  //   this.currentItems$.next(product);
  // }

  getTotalPrice() {
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
    this.getCartData();
    return this.items;
  }

  // try using get cartData
  getCartData() {
    let obj = Object.values(this.items).forEach(val => {
      const itemFromLS: any = localStorage.getItem(val.name);
      const item = JSON.parse(itemFromLS);
      console.log(item);
    });
    // return obj;

  }

  clearProduct(index: number) {
    this.items.splice(index, 1);
    this.currentItems$.next(null);
    // localStorage.removeItem(this.items[index].name);
  }

  clearCart() {
    this.items.splice(0, this.items.length);
    this.currentItems$.next(null);
    // localStorage.removeItem(this.items);
    // localStorage.clear();
  }
}
