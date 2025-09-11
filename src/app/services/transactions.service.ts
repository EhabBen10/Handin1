import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './creditcards.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private httpClient = inject(HttpClient);
  private apiUrl = `${environment.apiBase}/api/Transaction`;

  public getTransactions(token?: string): Observable<Transaction[]> {
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : undefined;
    return this.httpClient.get<Transaction[]>(this.apiUrl, { headers });
  }
}
