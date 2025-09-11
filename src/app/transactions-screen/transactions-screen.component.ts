import { Component, OnInit } from '@angular/core';
import {  TransactionsListComponent } from './transactions-list/transactions-list.component';
import { Transaction } from '../services/creditcards.service';
import { TransactionsService } from '../services/transactions.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions-screen',
  standalone: true,
  imports: [CommonModule, TransactionsListComponent],
  templateUrl: './transactions-screen.component.html',
  styleUrls: ['./transactions-screen.component.scss']
})

export class TransactionsScreenComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private svc: TransactionsService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('authToken') ?? '';
    this.svc.getTransactions(token).subscribe({
      next: (data) => this.transactions = data,
      error: (err) => console.error('Failed to load transactions', err)
    });
  }
}
