import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class Harrypotter1Service {

  urlHP = 'https://hp-api.herokuapp.com';
  endponit = '/api/characters/house'
  casaHP = '/gryffindor'

  constructor(private http:HttpClient) { }

  getPersonajeHPRequest():Observable<any>{
    return this.http.get(this.urlHP+this.endponit+this.casaHP);

  }

}
