import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GameofthroneService {

  urlGOT = 'https://thronesapi.com';
  endponit = '/api/v2/Characters'

  constructor(private http:HttpClient) { }

  getPersonajeGotRequest():Observable<any>{
    return this.http.get(this.urlGOT+this.endponit);

  }
  


}
