import { Component, inject, OnInit, signal } from '@angular/core';
import { CreditCard, CreditCardsService } from '../../services/creditcards.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ExpirationDatePipe } from '../../pipes/expiration-date.pipe';

@Component({
  selector: 'app-carddetails',
  imports: [CommonModule, ExpirationDatePipe],
  templateUrl: './carddetails.component.html',
  styleUrl: './carddetails.component.scss'
})
export class CarddetailsComponent implements OnInit {
  private cardService = inject(CreditCardsService);
  private activateRoute = inject(ActivatedRoute);
  private router = inject(Router);


  protected readonly creditCard$: Observable<CreditCard | null> = this.activateRoute.paramMap.pipe(
    switchMap(params => {
      const cardNumber = params.get('cardNumber');
      const numericCardNumber = Number(cardNumber);
      return this.cardService.getCreditCardById(numericCardNumber);
    }),
    catchError((error) => {
      console.error('Error fetching credit card details:', error);
      return of(null);
    })
  );

  ngOnInit() {
  }

  protected deleteCard() {
    const cardNumber = this.activateRoute.snapshot.paramMap.get('cardNumber');
    if (cardNumber) {
      this.cardService.deleteCreditCard(Number(cardNumber)).pipe(
        tap(() => {
          this.router.navigate(['/home']);
        })
      ).subscribe();
    } else {
      this.router.navigate(['/home']);
    }
  }

}
