import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { firstValueFrom } from 'rxjs';

export interface Gab {
  author: { username: string };
  content: string;
  authoredAt: Date;
}

@Injectable({ providedIn: 'root', deps: [] })
export class GabsService {
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
  ) {}

  async list(searchTerm?: string): Promise<Gab[]> {
    let params = new HttpParams();
    if (searchTerm) {
      params = params.set('search', searchTerm);
    }

    return (await firstValueFrom(
      this.httpClient.get('http://localhost:9000/gabs', {
        headers: { Authorization: `bearer ${this.authService.token}` },
        params,
      }),
    )) as Gab[];
  }

  async new(gab: { content: string }) {
    await firstValueFrom(
      this.httpClient.post('http://localhost:9000/gabs', gab, {
        headers: { Authorization: `bearer ${this.authService.token}` },
      }),
    );
  }
}
