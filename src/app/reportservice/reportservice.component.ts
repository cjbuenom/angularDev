import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface dataReport {  
  namaCliente:String,
  cuentacliente:String,      
  emailcliente:String,
  nrofactura: String,
  rutcliente : String,      
  cargocliente : String,
  proponenteCert:String,
  orderCompra:String,
  DireCliente:String,
  tlfcliente:String
}

@Component({
  selector: 'app-reportservice',
  templateUrl: './reportservice.component.html',
  styleUrls: ['./reportservice.component.css']
})
export class ReportserviceComponent implements OnInit {

  // @Input() validated3de3 : dataReport = {
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

  // validated3de3 = {
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

  validated3de3: any = 0

  formaReport : FormGroup

  
  

  constructor(private fb:FormBuilder) { 
    this.formaReport = this.fb.group({})
    this.crearForm()
  }

  ngOnInit(): void {
  }

  crearForm(){
    this.formaReport= this.fb.group({
      validated1Ok:['', [Validators.required, Validators.min(1)]],
      validated2Ok:['', [Validators.required, Validators.min(1)]],
      validated3Ok:['', [Validators.required, Validators.min(1)]]
    })
  }




  newreportcompleted(){
      console.log ('-  this.validated3de3  -'+ this.validated3de3)
  }







  generateReport(element:any) {
    
    
    let otro : any
    console.log(element)
    otro = JSON.stringify(element)
    // alert(element1)
     
    console.log('otro '+otro)
    console.log(this.validated3de3)
    // if(element1){ 
    //   this.validated3de3.rutcliente  = element1
      
    // }else{
    //   alert('nada de nada')
    // }
    // if (element1.rutcliente !== '') {
    //   // this.validated3de3 =+1
    //   console.log('this.validated3de3  1- dataReportOK'+ this.validated3de3)
    // }
    if (element !== "") {
      alert('al fin')
    }
    // if ( this.validated3de3 === 3 ) {
    //   console.log('informe Generado')
    // }else{
    //   alert("todos los campos del informe de servicio son requeridos")
    // }
  }
}
