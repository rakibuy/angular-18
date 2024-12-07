import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor() {}

  
}
