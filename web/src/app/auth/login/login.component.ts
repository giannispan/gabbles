import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

class LoginRequest {
  username: string = '';
}

interface LoginResponse {
  token: string;
}

@Component({
  standalone: true,
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  imports: [FormsModule, MatButtonModule, MatCardModule, MatDividerModule, MatInputModule],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private httpService: HttpClient,
    private router: Router,
  ) {}

  model = new LoginRequest();

  async login() {
    const response: LoginResponse = (await firstValueFrom(
      this.httpService.post('http://localhost:9000/login', this.model),
    )) as LoginResponse;

    this.authService.token = response.token;
    this.authService.userLoggedIn();
    this.router.navigate(['/']);
  }
}
