import { Component } from '@angular/core';
import { AuthService, UserProfile } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: false
})
export class RegisterComponent {
  model: UserProfile = {
    fullName: '',
    email: '',
    password: '',
    department: '',
    phone: ''
  };
  message = '';

  constructor(private auth: AuthService) {}

  register(): void {
    const result = this.auth.register(this.model);
    this.message = result.message;
    if (result.ok) {
      this.model = { fullName: '', email: '', password: '', department: '', phone: '' };
    }
  }
}
