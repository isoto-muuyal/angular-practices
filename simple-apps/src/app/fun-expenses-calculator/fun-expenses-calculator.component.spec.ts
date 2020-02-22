import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunExpensesCalculatorComponent } from './fun-expenses-calculator.component';

describe('FunExpensesCalculatorComponent', () => {
  let component: FunExpensesCalculatorComponent;
  let fixture: ComponentFixture<FunExpensesCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunExpensesCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunExpensesCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
