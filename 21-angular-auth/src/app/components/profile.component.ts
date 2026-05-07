import { Component } from '@angular/core';
import { AuthService, UserProfile } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  standalone: false
})
export class ProfileComponent {
  user: UserProfile | null = null;

  constructor(private auth: AuthService) {
    this.user = this.auth.getCurrentUser();
  }

  logout(): void {
    this.auth.logout();
    this.user = null;
  }
}
