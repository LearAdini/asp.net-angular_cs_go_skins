import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AccountService } from './service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private accountService:AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 1500);
  }

  setCurrentUser() {
    const userFromLS:any = localStorage.getItem('user');
    const user = JSON.parse(userFromLS);
    this.accountService.setCurrentUser(user);
  }

}
