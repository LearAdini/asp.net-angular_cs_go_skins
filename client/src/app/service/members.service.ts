import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, of, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Member } from '../models/member';
import { User } from '../models/user';
import { AccountService } from './account.service';


@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members: Member[] = [];
  users: Member[] = [];

  baseUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  getMember(username: string): Observable<Member> {
    const member = this.members.find(x => x.username === username);
    if (member) {
      return of(member);
    }
    return this.http.get<Member>(`${this.baseUrl}users/${username}`)
  }


  updateMember(user: Member) {
    return this.http.put(`${this.baseUrl}users`, user).pipe(
      tap(_ => {
        const index = this.members.findIndex(x => x.id === user.id);
        this.members[index] = user;
      })
    )
  }

  sendEmail(email: string) {
    console.log(email);
    return this.http.post<string>(this.baseUrl +'users/sendmail/', email);
  }
}
