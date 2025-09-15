import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Transaction } from './creditcards.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private httpClient = inject(HttpClient);

  public getTransactions(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`${environment.apiBase}/api/Transaction`);
  }
}
