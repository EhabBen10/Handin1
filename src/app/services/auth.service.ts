import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

type LoginResponse = {
  access_token: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpClient = inject(HttpClient);
  private accessToken: string | null = localStorage.getItem('access_token');

  public getAccessToken(): string | null {
    return this.accessToken;
  }

  public async loginAtStartup(): Promise<void> {
    if (this.accessToken && !this.isExpired(this.accessToken)) return;

    const response = await firstValueFrom(
      this.httpClient.post(`${environment.apiBase}/api/login`, {
        userName: environment.userName,
        password: environment.password
      },
        {
          responseType: 'text'
        }
      )
    );
    this.accessToken = response;
    localStorage.setItem('access_token', this.accessToken);
  }

  public clear(): void {
    this.accessToken = null;
    localStorage.removeItem('access_token');
  }

  private isExpired(jwt: string): boolean {
    try {
      const payload = JSON.parse(atob(jwt.split('.')[1]));
      const exp = payload.exp; // seconds since epoch
      const now = Math.floor(Date.now() / 1000);
      return typeof exp === 'number' ? now >= exp : true;
    } catch {
      return true;
    }
  }
}
