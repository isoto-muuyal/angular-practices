import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraRetiroComponent } from './calculadora-retiro.component';

describe('CalculadoraRetiroComponent', () => {
  let component: CalculadoraRetiroComponent;
  let fixture: ComponentFixture<CalculadoraRetiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraRetiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraRetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
