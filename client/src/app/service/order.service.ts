import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  addOrder(order: any) {
    return this.http.post<any>(this.baseUrl + '/order/addorder/', order);
  }

  deleteOrder(orderId: number) {
    return this.http.delete(`${this.baseUrl}/order/deleteorder/${orderId}`);
  }

  getOrders() {
    return this.http.get<Order[]>(this.baseUrl + `/order/getorders`);
  }

  getAllOrders(){
    return this.http.get<Order[]>(this.baseUrl + `/order/getallorders`);
  }
}
