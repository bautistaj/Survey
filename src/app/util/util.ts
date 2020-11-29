
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Util {
  handleError(error){
    console.log(error);
  }
}