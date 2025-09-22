import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsScreenComponent } from './transactions-screen.component';

describe('TransactionsScreenComponent', () => {
  let component: TransactionsScreenComponent;
  let fixture: ComponentFixture<TransactionsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
