import { Component } from '@angular/core';
import { FakeauthService } from '../../Services/fakeauth.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isConnected! : boolean

  constructor(private service : FakeauthService) {
    this.isConnected = service.isConnected
  }

}
