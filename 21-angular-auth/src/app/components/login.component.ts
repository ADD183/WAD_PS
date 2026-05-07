import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: false
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(private auth: AuthService) {}

  login(): void {
    const result = this.auth.login(this.email, this.password);
    this.message = result.message;
  }
}
