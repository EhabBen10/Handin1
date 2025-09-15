import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { Transaction } from '../services/creditcards.service';
import { TransactionsService } from '../services/transactions.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-transactions-screen',
  standalone: true,
  imports: [CommonModule, TransactionsListComponent],
  templateUrl: './transactions-screen.component.html',
  styleUrls: ['./transactions-screen.component.scss']
})

export class TransactionsScreenComponent implements OnInit {
  private transactionsService = inject(TransactionsService);
  private authService = inject(AuthService);

  transactions = signal<Transaction[]>([]);

  ngOnInit(): void {
    const token = this.authService.getAccessToken(); 

    if (!token) {
      console.error('No access token available');
      return;
    }

    this.transactionsService.getTransactions(token).subscribe({
      next: (data) => this.transactions.set(data),
      error: (err) => console.error('Failed to load transactions', err)
    });
  }
}
