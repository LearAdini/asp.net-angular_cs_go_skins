import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../service/cart.service';
import { AccountService } from '../service/account.service';
import { User } from '../models/user';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { MembersService } from '../service/members.service';
import { Member } from '../models/member';
import { CreditService } from '../service/credit.service';
import { Card } from '../models/card';
import { OrderService } from '../service/order.service';
import { Product, products } from '../models/products';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  items = this.cartService.getItems();
  validationErrors: string[] = [];
  totalPrice?: any;
  keyPressCount = 0;

  user!: User;
  member!: Member;
  card!: Card;
  edit: boolean = false;
  next: boolean = false;
  payed: boolean = false;
  addCard: boolean = false;
  ordered: boolean = false;
  haveCard: boolean = false;

  prod = products;

  creditForm: FormGroup;
  @ViewChild('editForm') editForm: NgForm;


  @ViewChild('cardDate') el: ElementRef;
  @ViewChild('paymentTitle') paymentTitle: ElementRef;
  @ViewChild('payed') payedDiv: ElementRef;
  @ViewChild('payed2') payedDiv2: ElementRef;



  constructor(
    private cartService: CartService,
    private accountService: AccountService,
    private membersService: MembersService,
    private creditService: CreditService,
    private orderService: OrderService,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      this.user = user as User;
    });

    this.creditService.currentCard$.pipe(take(1)).subscribe(card => {
      this.card = card as Card;
    });

  }

  ngOnInit(): void {
    this.loadMember();
    this.loadCard();
    this.totalPrice = this.cartService.getTotalPrice();
    this.initializeForm();
    for (let item of this.items) {
      console.log(item);
    }
  }

  loadMember() {
    this.membersService.getMember(this.user.username).subscribe(member => {
      this.member = member;
    });
  }

  loadCard() {
    this.creditService.getCardId(this.user.id as number).subscribe(card => {
      this.card = card;
    });
  }

  initializeForm() {
    this.creditForm = this.fb.group({
      userId: this.user.id,
      fullName: new FormControl('', Validators.required),
      cardNumber: new FormControl('', Validators.required),
      cardDate: new FormControl('', Validators.required),
      cardCVV: new FormControl('', Validators.required),
      idNumber: new FormControl('', Validators.required)
    });
  }

  removeItem(index: number) {
    this.cartService.clearProduct(index);
    this.totalPrice = this.cartService.getTotalPrice();
  }

  editFunc() {
    this.edit = !this.edit;
  }

  nextFunc() {
    if (this.card == undefined) {
      this.next = !this.next;
      this.edit = false;
      if (this?.totalPrice == 0) {
        this.payedDiv2.nativeElement.innerHTML =
          `<div>
         <h1 style="font-family: 'Sedgwick Ave', cursive;  font-weight: bold;">No Items In Cart</h1>
         </div>`
      }
    }
    else {
      this.haveCard = true;
      this.next = true;
      if (this?.totalPrice == 0) {
        this.payedDiv2.nativeElement.innerHTML =
          `<div>
         <h1 style="font-family: 'Sedgwick Ave', cursive;  font-weight: bold;">No Items In Cart</h1>
         </div>`
      }
    }
  }

  addedCard() {
    this.haveCard = true;
    this.next = false;
  }

  finishedFunc() {
    this.payed = false;
    for (let item of this.items) {
      item.price = Math.round((item.price - (item.price * item.sale / 100)));
      item.name = item.name.split(" ")[0];
      item.description = " Order Total Price: " + Math.round(this.totalPrice) + " Product ID: " + item.id;
      this.orderService.addOrder(item).subscribe(() => {
        this.payedDiv.nativeElement.style.display = 'none';
        this.payedDiv2.nativeElement.innerHTML =
          `<div>
        <h1>Thank you for your purchase!</h1>
        <h3>Your order will be shipped to the address above</h3>
        <h3>Hope to see you soon !</h3>
        <br>
        </div>`
      });
      }
      this.cartService.clearCart();
  }


  updateMember() {
    this.membersService.updateMember(this.member).subscribe(() => {
      this.toastr.success("Updated your information successfully");
      this.editForm.reset(this.member);
      this.edit = false;
    });
  }

  addCreditCard() {
    this.creditService.addCreditCard(this.creditForm.value).subscribe(() => {
      this.card = this.creditForm.value;
      this.creditService.getCard(this.card);
      this.creditForm.reset(this.card);
      this.addedCard();
      this.toastr.success("Added your credit card successfully");
    });
  }
}
