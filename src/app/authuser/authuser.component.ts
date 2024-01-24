import { Component } from '@angular/core';
import { FakeauthService } from '../Services/fakeauth.service';

@Component({
  selector: 'app-authuser',
  standalone: true,
  imports: [],
  templateUrl: './authuser.component.html',
  styleUrl: './authuser.component.scss'
})
export class AuthuserComponent {

  isConnected! : boolean
  constructor(private service : FakeauthService){
    this.isConnected = service.isConnected
  }

  login(){
    this.service.login()
    this.isConnected = this.service.isConnected 
  }

  logout(){
     this.service.logout()
     this.isConnected = this.service.isConnected
  }


}
