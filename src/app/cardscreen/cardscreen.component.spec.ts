import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardscreenComponent } from './cardscreen.component';

describe('CardscreenComponent', () => {
  let component: CardscreenComponent;
  let fixture: ComponentFixture<CardscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardscreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
