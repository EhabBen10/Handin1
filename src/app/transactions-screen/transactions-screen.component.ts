import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { Transaction } from '../services/creditcards.service';
import { TransactionsService } from '../services/transactions.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transactions-screen',
  standalone: true,
  imports: [CommonModule, TransactionsListComponent, FormsModule],
  templateUrl: './transactions-screen.component.html',
  styleUrls: ['./transactions-screen.component.scss']
})
export class TransactionsScreenComponent implements OnInit {
  private transactionsService = inject(TransactionsService);
  transactions = signal<Transaction[]>([]);
  
  newTransaction: Partial<Transaction> = {
    cardNumber: 0,
    amount: 0,
    currencyCode: '',
    comment: ''
  };

  loadTransactions() {
    this.transactionsService.getTransactions().subscribe(transactions => {
      this.transactions.set(transactions);
    });
  }

  ngOnInit() {
    this.loadTransactions();
  }

  addTransaction() {
    const tx: Transaction = {
      uid: '', 
      cardNumber: Number(this.newTransaction.cardNumber),
      amount: Number(this.newTransaction.amount),
      currencyCode: this.newTransaction.currencyCode || '',
      transactionDate: new Date().toISOString(), 
      comment: this.newTransaction.comment || ''
    };

    this.transactionsService.addTransaction(tx).subscribe({
      next: () => {
        this.loadTransactions();
        
        this.newTransaction = { cardNumber: 0, amount: 0, currencyCode: '', comment: '' };
      },
      error: err => console.error('Failed to add transaction', err)
    });
  }
}
