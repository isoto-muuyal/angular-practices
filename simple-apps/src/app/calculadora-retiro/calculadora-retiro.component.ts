import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpHeaders, HttpErrorResponse, HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Component({
  selector: 'app-calculadora-retiro',
  templateUrl: './calculadora-retiro.component.html',
  styleUrls: ['./calculadora-retiro.component.css']
})

@Injectable()
export class CalculadoraRetiroComponent  {

  constructor(private http: HttpClient){
      http.get('http://localhost:8090/api/test').subscribe(response=> {
        console.log(response);
      });
  }

  @Input('monthlyPention') monthlyPention1: number;
  @Input('age') age1: number;

  form = new FormGroup( {
    monthlyPention : new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9].*?')
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9].*?')
    ])
  });

  get monthlyPention(){
    return this.form.get('monthlyPention');
  }

  get age(){
    return this.form.get('age');
  }

  onClick(monthlyPention: HTMLInputElement, age: HTMLInputElement){
    console.log('Submit clicked');
    console.log('monthly value: ' + monthlyPention.value);
    console.log('age value: ' +  age.value);
    let ageInYears: number = Number(age.value);
    let yearsToRetire: number = 65 - ageInYears;
    const endpoint = 'http://localhost:8090/api/getRetirement';
    const httpOptions = {
      headers: new HttpHeaders({
        'Application-type': 'application/json',
        'Content-type': 'application/json',
        'yearsToRetire': yearsToRetire.toString(),
        'monthlyIncome': monthlyPention.value
      })
    };

    this.http.get(endpoint, httpOptions).subscribe(res=> {
        console.log("calling get");
        console.log(res);
    });
  }
}
