import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API = environment.API;
  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(`${this.API}/authenticate`, user);
  }

  handleSession(response): void {
    if (response.jwt) {
      sessionStorage.setItem('token', response.jwt);
    }
  }

  getToken(): string {
    return sessionStorage.getItem('token');
  }

  closeSession(): void {
    sessionStorage.clear();
  }
}
