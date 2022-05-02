import { HttpClient } from '@angular/common/http';
import { join } from '@angular/compiler-cli';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/products';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addOrder(order: any) {
    return this.http.post<any>(this.baseUrl + 'order/addorder/', order);
  }

  getOrders(order: any) {
    return this.http.get<any>(this.baseUrl + 'order/getorder/', order);
  }

}

