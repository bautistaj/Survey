import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pcbrand } from '../model/pcbrand';

@Injectable({
  providedIn: 'root'
})
export class PcBrandService {
  private API = environment.API;
  constructor(private http: HttpClient) { }

  index(page: number) {
    return this.http.get(`${this.API}/pcbrands/page/${page}`).toPromise();
  }

  create(pcbrand: Pcbrand) {
    return this.http.post(`${this.API}/pcbrands`, pcbrand).toPromise();
  }

  findById(id: number) {
    return this.http.get(`${this.API}/pcbrands/${id}`).toPromise();
  }

  findAll() {
    return this.http.get(`${this.API}/pcbrands`).toPromise();
  }
}
