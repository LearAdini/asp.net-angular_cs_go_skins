import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, of } from 'rxjs';
import {  tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member';


@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  members: Member[] = [];
  users: Member[] = [];

  constructor(private http: HttpClient) { }

  getMember(username: string): Observable<Member> {
    const member = this.members.find(x => x.username === username);
    if (member) {
      return of(member);
    }
    return this.http.get<Member>(`${this.baseUrl}users/${username}`)
  }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.baseUrl + 'users').pipe(
      tap(members => {
        this.members = members;
      })
    );
  }

  updateMember(user: Member) {
    return this.http.put(`${this.baseUrl}users`, user);
  }


  deleteMember(id: number) {
    return this.http.delete(`${this.baseUrl}users/${id}`);
  }

  sendEmail(email: string) {
    return this.http.post<string>(this.baseUrl +'users/sendmail/', email);
  }
}
