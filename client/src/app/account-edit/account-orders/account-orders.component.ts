import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { User } from '../../models/user';
import { OrderService } from '../../service/order.service';
@Component({
  selector: 'app-account-orders',
  templateUrl: './account-orders.component.html',
  styleUrls: ['./account-orders.component.css']
})
export class AccountOrdersComponent implements OnInit {
  orders: Order[];
  user!: User;
  constructor( private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(x => {
      this.orders = x;
    });
  }


}
