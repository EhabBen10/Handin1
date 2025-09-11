import { Component } from '@angular/core';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';

@Component({
  selector: 'app-transactions-screen',
  imports: [TransactionsListComponent],
  templateUrl: './transactions-screen.component.html',
  styleUrl: './transactions-screen.component.scss'
})
export class TransactionsScreenComponent {

}
