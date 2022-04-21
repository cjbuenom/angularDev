import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { itemServicio } from "../../serviceorder.component";

import { ExtinguisheritemService } from "../../services/extinguisheritem.service";
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-dataitem',
  templateUrl: './dataitem.component.html',
  styleUrls: ['./dataitem.component.css']
})
export class DataitemComponent implements OnInit {





  @Output() primeritem : EventEmitter<any>;
  // @Output() selectedAgentExtingui : EventEmitter<any>;



  @Input() numOrdercurrent : any

  // @Input() itemsOrdenActual: itemServicio [] = [];
  ordenValida : any = 0
  i : number = 0
  checksTrue :any
  forma : FormGroup
  btnguardar : any
  itemsOrdenActual: itemServicio [] = [];
  cantidaditems : any
  numejemplo : any = "5566778899"
  inputnumbercert:any = ""
  titulosColumnas = ['nroOrden','#', 'Agente Extintor', 'Capacidad', 'Numero Certificacion', 'Certificador', 'A','B','C','D','E','F','G','H','I','J','K','L','M','N' ];
  constructor(private apitaller:ExtinguisheritemService ,private fb:FormBuilder, private validatorsService:ValidatorsService) {
    this.primeritem = new EventEmitter();
    // this.selectedAgentExtingui = new EventEmitter()
    this.forma = this.fb.group({})
    this.crearForm()
   }



  ngOnInit(): void {
    // this.estatebtnguardar()
  }

  crearForm(){ 
    this.forma= this.fb.group({
      // nroItem:['', [Validators.required, Validators.min(1)]],      
      agentextin:['', [Validators.required, this.validatorsService.fieldAgentExting]],
      capacity:  ['', [Validators.required]],
      numbercert : ['', [Validators.required, Validators.min(1), Validators.maxLength(20),this.validatorsService.fieldNumberCert]],     
      certifier :  ['',[Validators.required]],
      workA:[''],
      workB:[''],
      workC:[''],
      workD:[''],
      workE:[''],
      workF:[''],
      workG:[''],
      workH:[''],
      workI:[''],
      workJ:[''],
      workK:[''],
      workL:[''],
      workM:[''],
      workN:[''],
    })
  }

  guardar (){
    console.log(this.forma)
    

    this.validachecks()
    if (this.forma.valid) {
      if (this.checksTrue >= 1) {
        this.ordenValida+=1
        this.primeritem.emit(this.ordenValida);
        // console.log(this.forma.value)
        this.sendItemCurrent()
        this.forma.reset();  
        this.getitemsOrderCurrent()
      }
      else{
        alert("todos los campos de datos del extintor son requeridos")
        this.checksTrue = -1
      } 
  
    } else{
      alert("todos los campos de datos del extintor son requeridos")
      this.checksTrue = -1
    }
    
  }

  getitemsOrderCurrent(){
    console.log("llamada temsOrderCurrent");
    this.apitaller.getItemsOrderServicesCurrent(this.numOrdercurrent).subscribe(resp =>{      
      let aux:any = resp;
      this.itemsOrdenActual = aux.mensaje;  
      console.log(this.itemsOrdenActual) 
      this.cantidaditems =  this.itemsOrdenActual.length
      console.log('this.cantidaditems'+this.cantidaditems) 
    });
  }


  // getDataService(){
  //   console.log("llamada getDataService");
  //   this.apitaller.getItemsOrderServices().subscribe(resp =>{      
  //     let aux:any = resp;
  //     this.itemsOrdenActual = aux.mensaje;  
  //     console.log(this.itemsOrdenActual) 
  //     this.cantidaditems =  this.itemsOrdenActual.length
  //     console.log('this.cantidaditems'+this.cantidaditems) 
  //   });
  // }

  sendItemCurrent(){
    let auxWorkA, auxWorkB, auxWorkC
    let auxWorkD, auxWorkE, auxWorkF
    let auxWorkG, auxWorkH, auxWorkI
    let auxWorkJ, auxWorkK, auxWorkL
    let auxWorkM, auxWorkN
    if (this.forma.get('workA')?.value) {
      auxWorkA = 1
     }else{
      auxWorkA = ""
     }
     if (this.forma.get('workB')?.value) {
      auxWorkB = 1
    }else{
      auxWorkB = ""
    }
     if (this.forma.get('workC')?.value) {
      auxWorkC = 1
    }else{
      auxWorkC = ""
    }
     if (this.forma.get('workD')?.value) {
      auxWorkD = 1
    }else{
     auxWorkD = ""
    }
     if (this.forma.get('workE')?.value) {
      auxWorkE = 1
    }else{
     auxWorkE = ""
    }
     if (this.forma.get('workF')?.value) {
      auxWorkF = 1
    }else{
     auxWorkF = ""
    }
     if (this.forma.get('workG')?.value) {
      auxWorkG = 1
    }else{
     auxWorkG = ""
    }
     if (this.forma.get('workH')?.value) {
      auxWorkH = 1
    }else{
     auxWorkH = ""
    }
     if (this.forma.get('workI')?.value) {
      auxWorkI = 1
    }else{
     auxWorkI = ""
    }
     if (this.forma.get('workJ')?.value) {
      auxWorkJ = 1
    }else{
     auxWorkJ = ""
    }
     if (this.forma.get('workK')?.value) {
      auxWorkK = 1
    }else{
     auxWorkK = ""
    }
     if (this.forma.get('workL')?.value) {
      auxWorkL = 1
    }else{
     auxWorkL = ""
    }
     if (this.forma.get('workM')?.value) {
      auxWorkM = 1
    }else{
     auxWorkM = ""
    }
     if (this.forma.get('workN')?.value) {
      auxWorkN = 1
    }else{
     auxWorkN = ""
    }
    let obj = {
      nroOrder: this.numOrdercurrent,
      nroItem:++this.i,
      agentextin:this.forma.get('agentextin')?.value,
      capacity:this.forma.get('capacity')?.value,
      numbercert : this.forma.get('numbercert')?.value,      
      certifier : this.forma.get('certifier')?.value,
      workA:auxWorkA,
      workB:auxWorkB,
      workC:auxWorkC,
      workD:auxWorkD,
      workE:auxWorkE,
      workF:auxWorkF,
      workG:auxWorkG,
      workH:auxWorkH,
      workI:auxWorkI,
      workJ:auxWorkJ,
      workK:auxWorkK,
      workL:auxWorkL,
      workM:auxWorkM,
      workN:auxWorkN,
      }
    this.apitaller.senditemserviceorder(obj).subscribe(respuesta =>{
      console.log(respuesta);
    });
    // this.router.navigate(['/games'])  
    
    
  }

  validachecks(){
   let cntWorks : number = 0
   
   if (this.forma.get('workA')?.value) {
    cntWorks++
   }
   if (this.forma.get('workB')?.value) {
    cntWorks++
   }
   if (this.forma.get('workC')?.value) {
    ++cntWorks
   }
   if (this.forma.get('workD')?.value) {
    ++cntWorks
   }
   if (this.forma.get('workE')?.value) {
    ++cntWorks
   }
   if (this.forma.get('workF')?.value) {
    cntWorks++
   }
   if (this.forma.get('workG')?.value) {
    ++cntWorks
   }
   if (this.forma.get('workH')?.value) {
    ++cntWorks
   }
   if (this.forma.get('workI')?.value) {
    ++cntWorks
   }
   if (this.forma.get('workJ')?.value) {
    ++cntWorks
   }
   if (this.forma.get('workK')?.value) {
    ++cntWorks
   }
   if (this.forma.get('workL')?.value) {
    ++cntWorks
   }
   if (this.forma.get('workM')?.value) {
    ++cntWorks
   }
   if (this.forma.get('workN')?.value) {
    ++cntWorks
   }

   console.log('cntWorks'+cntWorks)
   if (cntWorks !== 0) {

    this.checksTrue = cntWorks 
   }else{
        // alert("Debes seleccionar almenos un trabajo realizado para este item")
        this.checksTrue = -1
   }

   
  
  }


  estatebtnguardar(){


    this.btnguardar = document.getElementById('additemorder')    
    // this.btnguardar.setAttribute('disabled','true')
    // this.inputnumbercert = document.getElementById('numberCert')    
    

    this.btnguardar.classList.add('disabled','true'); 

  //   if (this.inputnumbercert.value !== "")  {
  //     this.btnguardar.classList.remove('disabled'); 
  //   }
  }

  validacamposHabilitaGuardaritem(){
    let selectAgente = this.forma.get('agentextin')?.value
    console.log('selectAgente'+selectAgente)

    if (selectAgente !== "") {
      this.btnguardar.setAttribute('disabled','false')
      this.btnguardar.classList.remove('disabled'); 
    }
  }

}
