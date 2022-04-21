import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { itemServicio } from 'src/app/serviceorder/serviceorder.component';
import { ExtinguisheritemService } from 'src/app/serviceorder/services/extinguisheritem.service';
@Component({
  selector: 'app-gridatareport',
  templateUrl: './gridatareport.component.html',
  styleUrls: ['./gridatareport.component.css']
})
export class GridatareportComponent implements OnInit {
  @Output() itemsEncontrados : EventEmitter<any>;

  @Output() itemsOrdenActual: any
  
  // @Output() itemsOrdenActual : any;
  // @Output() cantidaditems :any ;
  @Output() dataValidated = new EventEmitter<number>();
  gridataOk : any = 0
  // @Input() titulos: any
  formadatagrid :FormGroup

  obj = {
    nroReportService:"",
    nroOrden:"",
  }

  cantidaditems:any = 0
  
  titulos = ['Item','Tipo Agente', 'Capacidad', 'Numero Certificado','A','B','C','D','F','Condicion del extintor' ]; 
  
  @Input() numreportCurrent : any

  objectKeys = Object.keys;
  constructor(private apitaller:ExtinguisheritemService,private fb:FormBuilder) { 
    this.formadatagrid = this.fb.group({})
    
    this.crearFormA()
    this.itemsEncontrados = new EventEmitter();
   }

  ngOnInit(): void {
  }

  crearFormA(){
    this.formadatagrid= this.fb.group({
      nroOrdenInforme:['', [Validators.required, Validators.min(1)]]  
    
    })
  }

  searchItemsOrder (){
    console.log('valor que viene del padre datareport'+this.numreportCurrent)

    let auxCod : any
    console.log("llamada temsOrderCurrent");
    this.apitaller.getItemsOrderServicesCurrent(this.formadatagrid.get('nroOrdenInforme')?.value).subscribe(resp =>{      
      
      if(resp){
        let aux:any = resp;
      
      this.itemsOrdenActual = aux.mensaje;  
      console.log(this.itemsOrdenActual) 
      auxCod = aux.codigo;  
      console.log('auxCod - :'+auxCod) 
     
      console.log(this.formadatagrid) 
        if ( auxCod !== 503 &&   this.formadatagrid.valid) {
          this.cantidaditems =  this.itemsOrdenActual.length
          console.log('this.cantidaditems'+this.cantidaditems) 
          if (this.cantidaditems >= 0) {

          
            // this.gridataOk = 1
            // console.log('campos grid report OK :'+this.gridataOk)
            // this.dataValidated.emit(this.gridataOk);
            this.pintafooterreportitems()
            this.sendmodifyobjReport()

          }
        }else{
          alert('No se encontro Orden de servicio : '+this.formadatagrid.get('nroOrdenInforme')?.value )
          this.formadatagrid.reset()
          this.cantidaditems = -1
        }
     }
      
    });
  }

  pintafooterreportitems(){
    // console.log('pintagriditems'+element)
    // if (element === 1) {
      let pintafooter :  any = document.getElementById('zonafooter')  
      
      pintafooter.classList.remove('dataitemdisabled'); 
      pintafooter.classList.add('dataitemactivated'); 
    // }
  }
 

  datagridReportOk(element2:any){
    console.log('datagridReportOk '+element2 )

    // this.validated3de3 =+element2
    //  console.log('this.validated3de3 2- datagridReportOk'+ this.validated3de3)
  }

  sendmodifyobjReport(){

    this.obj = { 
      
      nroOrden:this.formadatagrid.get('nroOrdenInforme')?.value,
      nroReportService:this.numreportCurrent
    }
    console.log(this.obj)

    this.apitaller.sendModifyReportObjOrderService(this.obj).subscribe(resp =>{      
      
      if(resp){
        let aux:any = resp;
      
     let loquetrae = aux.mensaje;  
      console.log('loquetrae sendmodifyobjReport  : '+loquetrae) 
      // auxCod = aux.codigo;  
      // console.log('auxCod - :'+auxCod) 
      // this.apitaller.sendReportobjCompleted(this.obj).subscribe(respuesta =>{
      //   console.log(respuesta);
      // });
      }

    });
  }
}
