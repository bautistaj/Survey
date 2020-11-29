import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API = environment.API;
  
  constructor(private http: HttpClient) { }

  index(page: number) {
    return this.http.get(`${this.API}/users/page/${page}`).toPromise();
  }

  create(user: User) {
    return this.http.post(`${this.API}/users`, user).toPromise();
  }

  update(user: User) {
    return this.http.put(`${this.API}/users`, user).toPromise();
  }

  findById(id: number) {
    return this.http.get(`${this.API}/users/${id}`).toPromise();
  }

  deactivate(username: string) {
    return this.http.put(`${this.API}/users/deactivate/${username}`, null).toPromise();
  }
}
