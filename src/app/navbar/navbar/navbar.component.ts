import { Component } from '@angular/core';
import { SignupComponent } from '../../signup/signup.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
