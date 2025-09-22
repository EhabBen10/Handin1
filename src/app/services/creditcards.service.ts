import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface CreditCard {
  cardNumber: number;
  cscCode: number;
  cardHolderName: string;
  expirationMonth: number;
  expirationYear: number;
  issuer: string;
  transactions: Transaction[];
}

export interface Transaction {
  uid: string;
  cardNumber: number | null;
  amount: number | null;
  currencyCode: string;
  transactionDate: string;
  comment: string;
}

@Injectable({
  providedIn: 'root'
})
export class CreditCardsService {
  private httpClient = inject(HttpClient);

  public getCreditCard(): Observable<CreditCard[]> {
    return this.httpClient.get<CreditCard[]>(`${environment.apiBase}/api/CreditCard`);
  }

  public getCreditCardById(cardNumber: number): Observable<CreditCard> {
    return this.httpClient.get<CreditCard>(`${environment.apiBase}/api/CreditCard/cardnumber?cardnumber=${cardNumber}`);
  }

  public deleteCreditCard(cardNumber: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiBase}/api/CreditCard/cardnumber?cardnumber=${cardNumber}`);
  }

  public addCreditCard(card: CreditCard): Observable<CreditCard> {
    return this.httpClient.post<CreditCard>(`${environment.apiBase}/api/CreditCard`, card);
  }

}
