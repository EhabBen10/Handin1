import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './creditcards.service';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private httpClient = inject(HttpClient);
  private authService = inject(AuthService);
  private apiUrl = `${environment.apiBase}/api/Transaction`;

  public getTransactions(): Observable<Transaction[]> {
    const token = this.authService.getAccessToken();
    return this.httpClient.get<Transaction[]>(this.apiUrl, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });
  }
}
