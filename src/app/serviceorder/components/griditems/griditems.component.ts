import { Component, OnInit, Input } from '@angular/core';

import { itemServicio } from "../../serviceorder.component";
import { ExtinguisheritemService } from '../../services/extinguisheritem.service';



@Component({
  selector: 'app-griditems',
  templateUrl: './griditems.component.html',
  styleUrls: ['./griditems.component.css']
})
export class GriditemsComponent implements OnInit {

  // itemsOrdenActual: itemServicio [] = [];
  @Input() titulos: any;

  @Input() dataInputform: any
  @Input() indexInput : any

  arrayGrid : any 
  
  objectKeys = Object.keys;
  // @Input() dataInputform:itemServicio = {
  //   nroItem:"",      
  //   agentextin:"",
  //   capacity: "",
  //   numbercert : "",      
  //   certifier : "",
  //   workA:"",
  //   workB:"",
  //   workC:"",
  //   workD:"",
  //   workE:"",
  //   workF:"",
  //   workG:"",
  //   workH:"",
  //   workI:"",
  //   workJ:"",
  //   workK:"",
  //   workL:"",
  //   workM:"",
  //   workN:"",
  // };


  constructor(
    private apitaller:ExtinguisheritemService
  ) { }

  ngOnInit(): void {
    // console.log(this.dataInput)
    // console.log(this.indexInput)
    

  this.setup()
}

setup(){
  
  console.log('largo this.dataInputform '+JSON.stringify(this.dataInputform))
  this.dataInputform = []
}
//   this.apitaller.getItemsOrderServices().subscribe(resp =>{
//     let data:any = resp;
//     this.itemsOrdenActual = data.mensaje;
//   });
//     console.log(this.itemsOrdenActual);
  
//     // this.getDataService()
// }

  
//  getDataService(){
//     console.log("llamada servicio");
//     this.apitaller.getItemsOrderServices().subscribe(resp =>{      
//       let aux:any = resp;
//       this.dataInput = aux.mensaje;  
//       this.itemsOrdenActual = aux.mensaje;  
      
//       console.log(this.itemsOrdenActual)   
//       console.log(this.dataInput)      
//     });
//   }



}
