import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, ReplaySubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';


@Injectable({
  providedIn: 'root'
})
export class CreditService {

  cards: Card[] = [];
  card: Card;

  baseUrl = environment.apiUrl;
  private currentCardSource$ = new ReplaySubject<Card | null>(1);
  currentCard$ = this.currentCardSource$.asObservable();
  constructor(private http: HttpClient) { }


  setCardLs(card: Card) {
    localStorage.setItem('card', JSON.stringify(card));
    this.currentCardSource$.next(card);
  }

  removeCurrentCard() {
    localStorage.removeItem('card');
    this.currentCardSource$.next(null);
  }

  getCard(card: Card): Observable<Card> {
    return this.http.get<Card>(`${this.baseUrl}card/getcard/${this.getCardId(card.userId as number)}`)
  }

  getCardId(card: number): Observable<Card> {
    const cards = this.cards.find(x => x.userId === card);
    if (cards) {
      return of(cards);
    }
    return this.http.get<Card>(`${this.baseUrl}card/getcard/${card}`)
  }

  // getCardLs() {
  //   let lsCard = localStorage.getItem('card');
  //   if (lsCard) {
  //     let card = JSON.parse(lsCard);
  //     console.log(card);
  //   }
  // }

  addCreditCard(card: Card) {
    return this.http.post<Card>(this.baseUrl + 'card/addcard', card)
      .pipe(
        map((response: Card) => {
          const credit = response;
          if (credit) {
            this.setCardLs(credit);
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
}
