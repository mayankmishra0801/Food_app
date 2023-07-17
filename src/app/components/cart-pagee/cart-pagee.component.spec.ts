import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPageeComponent } from './cart-pagee.component';

describe('CartPageeComponent', () => {
  let component: CartPageeComponent;
  let fixture: ComponentFixture<CartPageeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartPageeComponent]
    });
    fixture = TestBed.createComponent(CartPageeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
