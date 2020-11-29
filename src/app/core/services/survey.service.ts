import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private API = environment.API;
  constructor(private http: HttpClient) { }

  index(page: number): Observable<any> {
    return this.http.get(`${this.API}/forms/page/${page}`);
  }
}
