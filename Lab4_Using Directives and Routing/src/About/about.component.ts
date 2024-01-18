import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  //String Interpolation
  position = "Student Web Developer";
  age = "21 Years Old"
  work_experience = "21 Years of Work Experience";
  email = "sibalreuben@gmail.com";
  website = "www.facebook.com/reubenrobb";
  phone = "123-456-7890";

  //Image Interpolation/binding
  imageUrl:string="assets/resumepic.png";
  imageW: number = 350;
  imageH: number = 400;
}
