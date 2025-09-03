import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CreditCard, CreditCardsService } from '../../services/creditcards.service';

@Component({
  selector: 'app-cardlist',
  imports: [RouterLink],
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.scss'
})
export class CardlistComponent implements OnInit {
  private creditCardService = inject(CreditCardsService);
  creditCards = signal<CreditCard[]>([]);

  ngOnInit() {
    this.creditCardService.getCreditCard().subscribe(cards => {
      this.creditCards.set(cards);
    });
  }
}
