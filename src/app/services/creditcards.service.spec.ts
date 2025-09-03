import { TestBed } from '@angular/core/testing';
import { CreditCardsService } from './creditcards.service';

describe('CreditCardsService', () => {
  let service: CreditCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
