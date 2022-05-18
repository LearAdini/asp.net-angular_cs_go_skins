import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Card } from '../models/card';
import { Member } from '../models/member';
import { User } from '../models/user';
import { AccountService } from '../service/account.service';
import { CreditService } from '../service/credit.service';
import { MembersService } from '../service/members.service';
import '../../assets/smtp.js';
import { TabDirective, TabsetComponent } from 'ngx-bootstrap/tabs';
declare let Email: any;

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {

  member!: Member;
  user!: User;
  card!: Card;
  edit: boolean = false;
  editCard: boolean = false;
  inputCode: boolean = false;
  resetPassword: boolean = false;
  completeReset: boolean = false;
  activeTab: TabDirective;
  code = this.generateCode(5);


  @ViewChild('editForm') editForm: NgForm;
  @ViewChild('cardForm') cardForm: NgForm;
  @ViewChild('resetForm') resetForm: NgForm;

  @ViewChild('pass') pass: ElementRef;
  @ViewChild('passBtn') passBtn: ElementRef;
  @ViewChild('checkPass') checkPass: ElementRef;
  @ViewChild('emailEdit') emailEdit: ElementRef;
  @ViewChild('codeEdit') codeEdit: ElementRef;
  @ViewChild('passwordEdit') passwordEdit: ElementRef;

  @ViewChild('memberTabs', { static: true }) memberTabs: TabsetComponent;

  constructor(
    private accountService: AccountService,
    private membersService: MembersService,
    private creditService: CreditService,
    private toastr: ToastrService
  )
  {
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
  }

  loadMember() {
    this.membersService.getMember(this.user.username).subscribe(member => {
      this.member = member;
    });
  }

  loadCard() {
    this.creditService.getCard(this.user.id as number).subscribe(card => {
      this.card = card;
    });
  }

  passFunc(){
    if (this.passBtn.nativeElement.style.display === "none") {
      this.passBtn.nativeElement.style.display = "block";
      this.passBtn.nativeElement.style = "margin:0";
    } else {
      this.passBtn.nativeElement.style.display = "none";
    }
  }

  editFunc() {
    this.edit = !this.edit;
    this.editCard = false;
    this.completeReset = false
    this.resetPassword = false;
    this.passFunc();
  }

  editCardFunc() {
    this.editCard = !this.editCard;
    this.edit = false;
    this.resetPassword = false;
    this.completeReset = false
    this.passFunc();
  }

  editPassword() {
    this.resetPassword = !this.resetPassword;
    this.edit = false;
    this.editCard = false;
  }

  updateCard(){
    this.creditService.updateCard(this.card).subscribe(() => {
      this.toastr.success("Updated your card information successfully");
      this.editCard = false;
    });
  }


  sendEmail() {
    {
      if (this.emailEdit.nativeElement.value != this.member.email) {
        this.toastr.error("Email is not valid");
        return;
      }
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "midtermiaf@gmail.com",
        Password: "52E00B422F80382C9C99D96B35209AF8E1B9",
        To: this.emailEdit.nativeElement.value.toString(),
        From: "midtermiaf@gmail.com",
        Subject: "Code For Password Reset",
        Body: "Your Password Is: " + this.code
      });
    }
    this.inputCode = true;
    this.toastr.info("Check spam mail for code, or scan the QR for code");
  }

  codeCheck() {
    if (this.codeEdit.nativeElement.value.toString() != this.code.toString()) {
      this.toastr.error("Code is not valid, Check email");
      return;
    }
    else {
      this.completeReset = true;
    }
  }

  updatePassword() {
    if (this.pass.nativeElement.value != this.checkPass.nativeElement.value) {
      this.toastr.error("Password does not match");
      return;
    }

    else {
      this.membersService.updateMember(this.member).subscribe(() => {
        this.toastr.success("Updated Password Successfully");
      });
    }
  }

  updateMember() {
    this.membersService.updateMember(this.member).subscribe(() => {
      this.toastr.success("Updated your information successfully");
      this.editForm.reset(this.member);
      this.edit = false;
    });
  }

  generateCode(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  selectTab(tabId: number) {
    this.memberTabs.tabs[tabId].active = true;
  }
}
