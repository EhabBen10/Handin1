import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CreditCard, CreditCardsService } from '../../services/creditcards.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-carddetails',
  imports: [CommonModule],
  templateUrl: './carddetails.component.html',
  styleUrl: './carddetails.component.scss'
})
export class CarddetailsComponent implements OnInit {
  private cardService = inject(CreditCardsService);
  private activateRoute = inject(ActivatedRoute);
  private router = inject(Router);



  protected readonly originalCreditCard = signal<CreditCard | null>(null);


  protected readonly cardNumber = signal('');
  protected readonly cardHolderName = signal('');
  protected readonly cscCode = signal(0);
  protected readonly expirationMonth = signal(0);
  protected readonly expirationYear = signal(0);
  protected readonly issuer = signal('');

  protected readonly hasChanges = computed(() => {
    const original = this.originalCreditCard();
    if (!original) return false;

    return (
      this.cardNumber() !== original.cardNumber ||
      this.cardHolderName() !== original.cardHolderName ||
      this.cscCode() !== original.cscCode ||
      this.expirationMonth() !== original.expirationMonth ||
      this.expirationYear() !== original.expirationYear ||
      this.issuer() !== original.issuer
    );
  });

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

  private readonly _ = this.activateRoute.paramMap.pipe(
    switchMap(params => {
      const cardNumber = params.get('cardNumber');
      const numericCardNumber = Number(cardNumber);
      return this.cardService.getCreditCardById(numericCardNumber);
    }),
    catchError((error) => {
      console.error('Error fetching credit card details:', error);
      return of(null);
    }),
    takeUntilDestroyed()
  ).subscribe(creditCard => {
    if (creditCard) {
      this.loadCardData(creditCard);
    } else {
      this.originalCreditCard.set(null);
    }
  });

  ngOnInit() {
  }
  loadCardData(creditCard: CreditCard) {
    this.originalCreditCard.set(creditCard);
    this.cardNumber.set(creditCard?.cardNumber || '');
    this.cardHolderName.set(creditCard?.cardHolderName || '');
    this.cscCode.set(creditCard?.cscCode || 0);
    this.expirationMonth.set(creditCard?.expirationMonth || 0);
    this.expirationYear.set(creditCard?.expirationYear || 0);
    this.issuer.set(creditCard?.issuer || '');
  }

  protected resetChanges() {
    const original = this.originalCreditCard();
    if (original) {
      this.loadCardData(original);
    }
  }


  protected getCurrentCreditCardData(): CreditCard | null {
    if (!this.originalCreditCard()) return null;

    return {
      cardNumber: this.cardNumber(),
      cardHolderName: this.cardHolderName(),
      cscCode: this.cscCode(),
      expirationMonth: this.expirationMonth(),
      expirationYear: this.expirationYear(),
      issuer: this.issuer(),
      transactions: this.originalCreditCard()?.transactions || []
    };
  }

  protected saveChanges() {
    const updateCard = this.getCurrentCreditCardData();
    if (updateCard) {
      console.log('Updated Credit Card:', updateCard); //do something about that
    }
  }

  protected deleteCard() {
    const cardToDelete = this.originalCreditCard();
    if (cardToDelete) {
      this.cardService.deleteCreditCard(Number(cardToDelete.cardNumber)).pipe(
        tap(() => {
          this.router.navigate(['/home']);
        })
      ).subscribe();
    } else {
      this.router.navigate(['/home']);
    }
  }

}
