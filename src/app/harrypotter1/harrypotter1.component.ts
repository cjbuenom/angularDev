import { Component, OnInit } from '@angular/core';
import { Harrypotter1Service  } from '../services/harrypotter1.service'

@Component({
  selector: 'app-harrypotter1',
  templateUrl: './harrypotter1.component.html',
  styleUrls: ['./harrypotter1.component.css']
})
export class Harrypotter1Component implements OnInit {

  personajeHP:any;

  constructor(private hpService:Harrypotter1Service) { }

  ngOnInit(): void {
    this.getPersonajeHP();
  }

  getPersonajeHP(){
    this.hpService.getPersonajeHPRequest().subscribe(resp => {
      console.log(resp)
      this.personajeHP = resp
    })
  }

}


