import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface CreditCard {
  cardNumber: string;
  cscCode: number;
  cardHolderName: string;
  expirationMonth: number;
  expirationYear: number;
  issuer: string;
}

@Injectable({
  providedIn: 'root'
})
export class CreditCardsService {
  private httpClient = inject(HttpClient);

  public getCreditCard(): Observable<CreditCard[]> {
    return this.httpClient.get<CreditCard[]>(`${environment.apiBase}/api/CreditCard`);
  }

  public getCreditCardById(cardNumber: string): Observable<CreditCard> {
    return this.httpClient.get<CreditCard>(`${environment.apiBase}/api/CreditCard/${cardNumber}`);
  }

}
