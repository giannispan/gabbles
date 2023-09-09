import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly AUTH_TOKEN_KEY = 'auth_token';
  isLoggedIn = new BehaviorSubject(this.isAuthenticated());

  constructor() {}

  get token(): string {
    return localStorage.getItem(this.AUTH_TOKEN_KEY) ?? '';
  }

  set token(token: string) {
    localStorage.setItem(this.AUTH_TOKEN_KEY, token);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout(): void {
    this.isLoggedIn.next(!this.isAuthenticated());
    localStorage.removeItem(this.AUTH_TOKEN_KEY);
  }

  // Manage login status
  userLoggedIn() {
    this.isLoggedIn.next(this.isAuthenticated());
  }
}

export const activateIfAuthenticated: CanActivateFn = () => {
  return inject(AuthService).isAuthenticated() || inject(Router).parseUrl('/login');
};
