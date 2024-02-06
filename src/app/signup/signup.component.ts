import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
import { NavbarComponent } from '../navbar/navbar/navbar.component';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NavbarComponent, RouterLink, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
   
    form = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl (''),
    password: new FormControl('')
  });
  
  
  ngOnInit(){
    
  }


  
}





