import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { Transaction } from '../services/creditcards.service';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-transactions-screen',
  standalone: true,
  imports: [CommonModule, TransactionsListComponent],
  templateUrl: './transactions-screen.component.html',
  styleUrls: ['./transactions-screen.component.scss']
})
export class TransactionsScreenComponent implements OnInit {
  private transactionsService = inject(TransactionsService);
  transactions = signal<Transaction[]>([]);

  ngOnInit() {
    this.transactionsService.getTransactions().subscribe(transactions => {
      this.transactions.set(transactions);
    });
  }
}
