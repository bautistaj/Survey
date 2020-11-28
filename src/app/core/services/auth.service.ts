import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(`http://localhost:80/survey/api/v1/authenticate`, user);
  }

  handleSession(response): void {
    if (response.jwt) {
      sessionStorage.setItem('token', response.jwt);
    }
  }
}
