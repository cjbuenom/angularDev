import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { dataReport } from '../../reportservice.component';
import { ExtinguisheritemService } from '../../../serviceorder/services/extinguisheritem.service';
import { FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-datareportservice',
  templateUrl: './datareportservice.component.html',
  styleUrls: ['./datareportservice.component.css']
})
export class DatareportserviceComponent implements OnInit {
  

  // @Output() validated : EventEmitter<dataReport>;

  // @Output() validatedRut : EventEmitter<any>;

  // @Output() interfaceoutput : dataReport = {
  //   namaCliente:"",
  //   cuentacliente:"",
  //   emailcliente:"",
  //   nrofactura: "",
  //   rutcliente : "",
  //   cargocliente : "",
  //   proponenteCert:"",
  //   orderCompra:"",
  //   DireCliente:"",
  //   tlfcliente:"",
  // }



  formadatareport : FormGroup
  
  obj = {
        nroReportService:"",
        namaCliente:"",
        cuentacliente:"",     
        emailcliente:"",
        nrofactura:"",
        rutcliente :"",  
        cargocliente : "",
        proponenteCert:"",
        orderCompra:"",
        DireCliente:"",
        tlfcliente:"",
        nroorderservice: "",
        dateService: "",
        nameworkerOrder: "",
        dateproximaMantencion: ""
      }

  reports:any
 formValidado : any = ""
 cantidadreports: any = 0
 dataValida : any = 0
  // formValidado:any 

  constructor( private apitaller:ExtinguisheritemService,private fb:FormBuilder) { 
    this.formadatareport = this.fb.group({})
    this.crearForm()
    // this.validated = new EventEmitter();
    // this.validatedRut = new EventEmitter();

  }

  ngOnInit(): void {
    this.setUp()
  }
  crearForm(){
    this.formadatareport= this.fb.group({
     
      nameclient:['', [Validators.required, Validators.min(1)]],
      rutclient:['', [Validators.required, Validators.min(1)]],
      direccClient:['', [Validators.required, Validators.min(1)]],
      cuentaClient:['', [Validators.required, Validators.min(1)]],
      cargoclient:['', [Validators.required, Validators.min(1)]],
      tlfClient:['', [Validators.required, Validators.min(1)]],
      emailClient:['', [Validators.required, Validators.min(1)]],
      proponenteCertifi:['', [Validators.required, Validators.min(1)]],
      nroFactura:['', [Validators.required, Validators.min(1)]],
      nroOrderCompra:['', [Validators.required, Validators.min(1)]],
    })
  
  }

  setUp(){
    
  }

  validateDatareport(){

    

    // this.formValidado.

  
    
  
    console.log(this.formadatareport)
    
    

    if (this.formadatareport.valid) {
      // this.cantidadreports+=1
      console.log(this.cantidadreports)

      
      this.apitaller.getallReportCompleted().subscribe(resp =>{      
        let aux:any = resp;
        this.reports = aux.mensaje;  
        console.log(this.reports) 
        this.cantidadreports  =  parseInt( this.reports.length)
        console.log(this.cantidadreports ) 
        // return this.reports.length;
      
  
      
      // this.formValidado=1
      // console.log('campos data report OK :'+JSON.stringify(obj))
      
    
     
     
      this.pintagriditems()

      this.obj  = {
        nroReportService: `${this.cantidadreports+1}`,
        namaCliente:this.formadatareport.get('nameclient')?.value,
        cuentacliente:this.formadatareport.get('cuentaClient')?.value,      
        emailcliente:this.formadatareport.get('emailClient')?.value,
        nrofactura: this.formadatareport.get('nroFactura')?.value,
        rutcliente : this.formadatareport.get('rutclient')?.value,     
        cargocliente : this.formadatareport.get('cargoclient')?.value,
        proponenteCert:this.formadatareport.get('proponenteCertifi')?.value,
        orderCompra:this.formadatareport.get('nroOrderCompra')?.value,
        DireCliente:this.formadatareport.get('direccClient')?.value,
        tlfcliente:this.formadatareport.get('tlfClient')?.value,
        nroorderservice: "",
        dateService: "",
        nameworkerOrder: "",
        dateproximaMantencion: ""
      }
      
      this.apitaller.sendReportobjCompleted(this.obj).subscribe(respuesta =>{
        console.log(respuesta);
      });


    });
    } 

  }


  


pintagriditems(){
  // console.log('pintagriditems'+element)
  // if (element === 1) {
    let pintagrilla :  any = document.getElementById('zonagrilla')  
    
    pintagrilla.classList.remove('dataitemdisabled'); 
    pintagrilla.classList.add('dataitemactivated'); 
  // }
}
  

datagridReportOk(element2:any){
  console.log('datagridReportOk '+element2 )

  // this.validated3de3 =+element2
  //  console.log('this.validated3de3 2- datagridReportOk'+ this.validated3de3)
}
}
