import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, ReplaySubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';


@Injectable({
  providedIn: 'root'
})
export class CreditService {
  baseUrl = environment.apiUrl;
  cards: Card[] = [];
  card: Card;
  private currentCardSource$ = new ReplaySubject<Card | null>(1);
  currentCard$ = this.currentCardSource$.asObservable();

  constructor(private http: HttpClient) { }


  setCurrentCard(card: Card) {
    localStorage.setItem('card', JSON.stringify(card));
    this.currentCardSource$.next(card);
  }

  getCard(card: number): Observable<Card> {
    return this.http.get<Card>(`${this.baseUrl}card/getcard/${card}`)
  }

  removeCurrentCard() {
    localStorage.removeItem('card');
    this.currentCardSource$.next(null);
  }

  addCreditCard(card: Card) {
    return this.http.post<Card>(this.baseUrl + 'card/addcard', card)
      .pipe(
        map((response: Card) => {
          const credit = response;
          if (credit) {
            this.setCurrentCard(credit);
          }
        }));
  }

  updateCard(card: Card) {
    return this.http.put(`${this.baseUrl}card`, card).pipe(
      tap(_ => {
        const index = this.cards.findIndex(x => x.userId === card.userId);
        this.cards[index] = card;
      })
    )
  }

  deleteCard(id: number) {
    return this.http.delete(`${this.baseUrl}card/${id}`);
  }

}
