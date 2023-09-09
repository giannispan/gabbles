import { Component } from '@angular/core';
import { AuthService } from '../app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loginStatus!: boolean;

  constructor(
    public authService: AuthService,
    public router: Router,
  ) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((status) => {
      this.loginStatus = status;
    });
  }
}
