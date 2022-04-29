// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, of, ReplaySubject } from 'rxjs';
// import { map, tap } from "rxjs/operators";
// import { environment } from 'src/environments/environment';
// import { User } from '../models/user';

// @Injectable({
//   providedIn: 'root'
// })
// export class AccountService {
//   baseUrl = environment.apiUrl;
//   private currentUserSource$ = new ReplaySubject<User | null>(1);
//   currentUser$ = this.currentUserSource$.asObservable();
//   users:User[] = [];
//   constructor(private http: HttpClient) { }

//   login(model: User) {
//     return this.http.post<User>(this.baseUrl + 'account/login', model)
//       .pipe(
//         map((response: User) => {
//           const user = response;
//           if (user) {
//           this.setCurrentUser(user);

//           }
//           return user;
//         }));
//   }

//   setCurrentUser(user: User) {
//     localStorage.setItem('user', JSON.stringify(user));
//     this.currentUserSource$.next(user);
//   }

//   getCurrentUser() {
//     const lsUser = localStorage.getItem('user');
//     if (lsUser) {
//       const user = JSON.parse(lsUser);
//       console.log(user);
//       return user;
//       // this.currentUserSource$.next(user);
//     }
//   }

//   logout() {
//     localStorage.removeItem('user');
//     this.currentUserSource$.next(null);
//   }



//   register(model: User) {
//     return this.http.post<User>(this.baseUrl + 'account/register', model)
//       .pipe(
//         map((user: User) => {
//           if(user){
//             this.setCurrentUser(user);
//           }
//           return user;
//         })
//       )
//   }

// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { CreditService } from './credit.service';
import { MembersService } from './members.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource$ = new ReplaySubject<User | null>(1);
  currentUser$ = this.currentUserSource$.asObservable();

  constructor(private http: HttpClient,private creditService:CreditService) { }

  login(model: User) {
    return this.http.post<User>(this.baseUrl + 'account/login', model)
      .pipe(
        map((response: User) => {
          const user = response;
          if (user) {
          this.setCurrentUser(user);
          }
        }));
  }

  setCurrentUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource$.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource$.next(null);
    this.creditService.removeCurrentCard();
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/register', model)
      .pipe(
        map((user: User) => {
          if(user){
            this.setCurrentUser(user);
          }
          return user;
        })
      )
  }
}
