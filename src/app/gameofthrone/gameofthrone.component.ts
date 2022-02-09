import { Component, OnInit } from '@angular/core';
import { GameofthroneService } from '../services/gameofthrone.service'


@Component({
  selector: 'app-gameofthrone',
  templateUrl: './gameofthrone.component.html',
  styleUrls: ['./gameofthrone.component.css']
})
export class GameofthroneComponent implements OnInit {

  personajeGot:any;

  constructor(private gotService:GameofthroneService) { }

  ngOnInit(): void {
    this.getPersonajegot();
  }

  getPersonajegot(){
    this.gotService.getPersonajeGotRequest().subscribe(resp => {
      console.log(resp)
      this.personajeGot = resp
    })
  }

}
