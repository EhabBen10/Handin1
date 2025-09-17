import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../../services/creditcards.service';


@Component({
  selector: 'app-transactions-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent {
    @Input() transactions: Transaction[] = [];
    @Output() delete = new EventEmitter<string>();
}
