import { Component } from '@angular/core';
import { FakeauthService } from '../../Services/fakeauth.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isConnected! : boolean

  constructor(private service : FakeauthService) {
    this.isConnected = service.isConnected
  }

}
