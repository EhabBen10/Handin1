import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreditCard, CreditCardsService } from '../services/creditcards.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cardscreen',
  imports: [ReactiveFormsModule],
  templateUrl: './cardscreen.component.html',
  styleUrl: './cardscreen.component.scss'
})
export class CardscreenComponent {
  private formbuilder = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  protected creditcardService = inject(CreditCardsService);
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  creditCardForm = this.formbuilder.group({
    cardNumber: [
      null as number | null,
      [
        Validators.required,
        Validators.pattern('^[0-9]{16}$'),
        Validators.minLength(7),
        Validators.maxLength(16)
      ]
    ],
    cardHolderName: ['', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]+$')
    ]],
    cscCode: [
      null as number | null,
      [
        Validators.required,
        Validators.pattern('^[0-9]{3}$'),
        Validators.min(100),
        Validators.max(999)
      ]
    ],
    expirationMonth: [null as number | null, [
      Validators.required,
      Validators.pattern('^[0-9]{2}$'),
      Validators.min(1),
      Validators.max(12)
    ]],
    expirationYear: [null as number | null, [
      Validators.required,
      Validators.pattern('^[0-9]{4}$'),
    ]],
    issuer: ['']
  });

  protected onSubmit() {
    if (this.creditCardForm.valid) {
      const formValue = this.creditCardForm.value;
      const newCard: CreditCard = {
        cardNumber: Number(formValue.cardNumber),
        cscCode: Number(formValue.cscCode),
        cardHolderName: formValue.cardHolderName || '',
        expirationMonth: Number(formValue.expirationMonth),
        expirationYear: Number(formValue.expirationYear),
        issuer: formValue.issuer || '',
        transactions: []
      };

      this.creditcardService.addCreditCard(newCard).subscribe({
        next: (card) => {
          this.snackBar.open('Credit card added successfully!', 'Close', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          this.creditCardForm.reset();
        },
        error: (error) => {
          this.snackBar.open('Failed to add credit card. Please try again.', 'Close', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
      });
    }
  }
}
