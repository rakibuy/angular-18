import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        debugger
        this.authService.storeToken(response.access_token);
        this.router.navigate(['/dashboard']); // Redirect to a protected page
      },
      error: (error) => {
        debugger
        this.errorMessage = 'Login failed: ' + error.error.detail;
      },
    });
  }
}
