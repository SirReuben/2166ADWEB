import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //Using ngIf to toggle text display
  showText: boolean = false;

  toggleText() {
    this.showText = !this.showText;
  }

  staff = [ 
    { firstName: 'Reuben', lastName: 'Sibal', email: 'sibalreuben@gmail.com', role: 'User' },   
    { firstName: 'Dayson', lastName: 'Delfin', email: 'DDelfin@test.com', role: 'Admin' }, 
    { firstName: 'Kenji', lastName: 'Jaculbia', email: 'kenjij@test.com', role: 'Admin' }, 
    { firstName: 'Dennis', lastName: 'DelaRosa', email: 'denden@test.com', role: 'User' }, 
    { firstName: 'Chrisjohn', lastName: 'Crisostomo', email: 'cjcrsstm@test.com', role: 'User' } 
    ];

  products = [
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 1', price: '$40.00 - $80.00' },
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 2', price: '$50.00 - $90.00' },
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 3', price: '$60.00 - $100.00' },
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 4', price: '$70.00 - $100.00' },

];

}
