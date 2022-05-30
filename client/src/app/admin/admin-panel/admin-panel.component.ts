import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Member } from 'src/app/models/member';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';
import { MembersService } from 'src/app/service/members.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  users: Member[];
  orders: Order[];
  currentUser: Member;

  @ViewChild('editForm') editForm: NgForm;

  admin: boolean = false;
  editUser: boolean = false;

  constructor(private orderService: OrderService,
    private membersService: MembersService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.getAllOrders();
    this.getAllUsers();
  }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe(x => {
      this.orders = x;
      this.orders[0].description
    });
  }

  getAllUsers() {
    this.membersService.getMembers().subscribe(x => {
      this.users = x;

       //remove superuser from being editable/deletable.
      for (const user of this.users) {
        if (user.username == 'Admin') {
          this.users.splice(this.users.indexOf(user), 1);
        }
      }
    });
  }

  deleteUser(user: Member) {
    if (confirm("Are you sure you want to delete user number: " + user.id + " ?")) {
      this.membersService.deleteMember((user.id as number)).subscribe(() => {
        this.toastr.info(`User ${user.username} deleted successfully`);
        this.router.navigateByUrl('/admin-panel').then(() => { window.location.reload(); });
      }
      );
    }
  }

  deleteOrder(order: Order) {
    if (confirm("Are you sure you want to delete order number: " + order.orderId + " ?")) {
      this.orderService.deleteOrder((order.orderId)).subscribe(() => {
        this.toastr.info(`Order Number: ${order.orderId} deleted successfully`);
      }
      );
    }
  }
}
