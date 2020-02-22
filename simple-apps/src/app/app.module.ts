import { BrowserModule } from '@angular/platform-browser';
import {AfterViewInit, ElementRef, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { CalculadoraRetiroComponent } from './calculadora-retiro/calculadora-retiro.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FunExpensesCalculatorComponent } from './fun-expenses-calculator/fun-expenses-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraRetiroComponent,
    FunExpensesCalculatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
