import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  form :FormGroup;

  constructor (private formGroup: FormGroup) {
   this.form = this.formGroup.group({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
   });

  }

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      this.form.valueChanges.valid;
    });
 }
  
  isFormValid() {
    return this.isFormValid.valid;
  } 
   usernameValidator(){
    if(this.username === ''){
      return {
        required: true
      };
    }
   }
   if (!this.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/)) {
    return {
      email: true
    };
  }


   passwordValidator() 
  if (this.password === '') {
    return {
      required: true
    };
  }

  if (this.password.length < 6) {
    return {
      minlength: 6
    };
  }
}





