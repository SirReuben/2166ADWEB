import { Component } from '@angular/core';
import { Observable, map, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time$: Observable<Date>;
  title = 'midterm';
  presentDate = new Date(); 

  constructor(){
    this.time$ = interval(1000).pipe(map(()=> new Date()))
  }
  x = 20841412.00;
  y = 123456789.00;
  z = 987654321.00;
  Fruits = ["Apple", "Orange", "Grapes", "Blackcurrant", "Mango"]
  ngOnInit(){
  }
  data: object ={
    name:"Gwei", age:21, food:'Nachos',
    languages:[
      {lname:'JS', level:'Wizard'},
      {lname:'PHP', level:'Beginner'},
      {lname:'Angular', level:'Beginner'}
    ]  
  }
  info: object ={
    name:"Robs", age:21, food:'Pizza',
    languages:[
      {lname:'Java', level:'Wizard'},
      {lname:'Python', level:'Beginner'},
      {lname:'CSS', level:'Beginner'}
    ]  
  }
  zxc: object ={
    name:"Rr", age:21, food:'Burger',
    languages:[
      {lname:'C++', level:'Wizard'},
      {lname:'C#', level:'Beginner'},
      {lname:'Node', level:'Beginner'}
    ]  
  }
}
