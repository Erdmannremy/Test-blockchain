import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  form: FormGroup; 

 constructor() {
  
  this.form = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl (),
    password: new FormControl()
  });
  }
  

 ngOnInit() {
  
}


}


