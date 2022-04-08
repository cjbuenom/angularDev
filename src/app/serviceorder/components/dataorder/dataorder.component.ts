import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';
import { ExtinguisheritemService } from '../../services/extinguisheritem.service';
import { itemServicio } from "../../serviceorder.component";
import { AuthService } from '@auth0/auth0-angular';
export interface orderCompleted {  


  numerorden:String,
  nombreclient:String,
  diaingress:String,    
  diaegress:String, 


  items : [itemServicio] 

}



@Component({
  selector: 'app-dataorder',
  templateUrl: './dataorder.component.html',
  styleUrls: ['./dataorder.component.css']
})
export class DataorderComponent implements OnInit {

  OrdenCompletaActual: orderCompleted [] = [];
  itemsOrderCompleted : itemServicio [] = [];
  forma : FormGroup
  valoraux : any 


  constructor(private fb:FormBuilder, private apitaller:ExtinguisheritemService, public auth: AuthService) {
    this.forma = this.fb.group({})
    this.crearForm()
   }

  ngOnInit(): void {

  }

  crearForm(){ 
    this.forma= this.fb.group({
      // nroItem:['', [Validators.required, Validators.min(1)]],      
      numberorder:['', [Validators.required, Validators.min(1)]],
      nameclient:  ['', [Validators.required, Validators.min(1)]],
      dateingress : ['', [Validators.required, Validators.min(1)]],     
      dateegress :  ['',[Validators.required, Validators.min(1)]]
    })
  }

  newOrderService(){
    let datosokOrder :  any = document.getElementById('zonaitems')  
    console.log(this.forma)
    
    if (this.forma.get('numberorder')?.dirty) {
      this.valoraux = this.forma.get('numberorder')?.value
      console.log('----valoraux :'+this.valoraux)
    }

    if (this.forma.valid) {
      //      
      // valoraux= this.forma.get('numberorder')?.dirty 
      // console.log('----valoraux :'+valoraux)
      datosokOrder.classList.remove('dataitemdisabled'); 
      datosokOrder.classList.add('dataitemactivated'); 
      
    }else{
      alert("todos los datos de la orden son requeridos")
    }

  }


  finalizeServiceOrder(){
    let datosokOrder :  any = document.getElementById('zonaitems')  
    let btnfinalizar : any = document.getElementById('neworder')
    console.log(this.forma)
    if (this.forma.valid) {
      this.sendOrderCompletedCurrent()
      this.forma.reset();  
      if (this.forma.get('numberorder')?.pristine ) {
        datosokOrder.classList.remove('dataitemactivated'); 
        datosokOrder.classList.add('dataitemdisabled');
        btnfinalizar.classList.remove('dataitemactivated'); 
        btnfinalizar.classList.add('dataitemdisabled'); 
      }
    }
  }

  sendOrderCompletedCurrent(){
    // console.log("llamada OrderCompletedCurrent");
    // this.apitaller.getItemsOrderServicesCurrent(this.valoraux).subscribe(resp =>{      
    //   let aux:any = resp;
    //   this.itemsOrderCompleted = aux.mensaje;  
    //   console.log(this.itemsOrderCompleted) 
    //   console.log('this.cantidaditems'+this.itemsOrderCompleted.length) 
    // });

    let obj = {
      numerorden: this.forma.get('numberorder')?.value,
      nombreclient:this.forma.get('nameclient')?.value,
      diaingress:this.forma.get('dateingress')?.value,
      diaegress:this.forma.get('dateegress')?.value,  
    
      }
    this.apitaller.sendOrderCompleted(obj).subscribe(respuesta =>{
      console.log(respuesta);
    });

  }


  pintaFinalizar(element:any){
    console.log('pintaFinalizar'+element)
    if (element === 1) {
      let pintaBoton :  any = document.getElementById('neworder')  
      
        pintaBoton.classList.remove('dataitemdisabled'); 
        pintaBoton.classList.add('dataitemactivated'); 
    }
  }

}
