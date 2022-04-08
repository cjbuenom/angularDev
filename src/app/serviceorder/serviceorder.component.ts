import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
// import { ExtinguisheritemService  } from "../serviceorder/services/extinguisheritem.service";

export interface itemServicio {  
  nroOrder:String,
  nroItem:String,      
  agentextin:String,
  capacity: String,
  numbercert : String,      
  certifier : String,
  workA:String,
  workB:String,
  workC:String,
  workD:String,
  workE:String,
  workF:String,
  workG:String,
  workH:String,
  workI:String,
  workJ:String,
  workK:String,
  workL:String,
  workM:String,
  workN:String,
}

@Component({
  selector: 'app-serviceorder',
  templateUrl: './serviceorder.component.html',
  styleUrls: ['./serviceorder.component.css']
})
export class ServiceorderComponent implements OnInit {

 



  constructor(
    public auth: AuthService,
  
  ) { }

  
  ngOnInit(): void {

  }


  
}
