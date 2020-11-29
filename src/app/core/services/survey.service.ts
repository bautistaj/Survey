import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Survey } from './../model/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private API = environment.API;
  constructor(private http: HttpClient) { }

  index(page: number) {
    return this.http.get(`${this.API}/surveys/page/${page}`).toPromise();
  }

  create(survey: Survey) {
    return this.http.post(`${this.API}/surveys`, survey).toPromise();
  }

  findById(id: number) {
    return this.http.get(`${this.API}/surveys/${id}`).toPromise();
  }

  deleteById(id: number) {
    return this.http.delete(`${this.API}/surveys/${id}`).toPromise();
  }
}
