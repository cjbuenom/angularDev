import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExtinguisheritemService } from 'src/app/serviceorder/services/extinguisheritem.service';
import { Router } from "@angular/router"
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-footereportservice',
  templateUrl: './footereportservice.component.html',
  styleUrls: ['./footereportservice.component.css']
})
export class FootereportserviceComponent implements OnInit {

  @Output() itemsEncontradosValidos : EventEmitter<any>;


  @Input() numreportCurrent : any
  formadatafooter: FormGroup

  auxMeService :any
  auxAnioService :any
  local : any
  datafooterok : any = 0 
  obj = {
    nroReportService:"",
    dateService: "",
    nameworkerOrder: "",
    dateproximaMantencion: ""
  };
  constructor(private apitaller:ExtinguisheritemService,private fb:FormBuilder,private router:Router, public auth: AuthService) { 
    this.formadatafooter = this.fb.group({})

    this.crearFormA()

    this.itemsEncontradosValidos = new EventEmitter();

   


}




  ngOnInit(): void {
  }


  crearFormA(){
    this.formadatafooter= this.fb.group({
      dateMeServiceReport:['', [Validators.required, Validators.min(1)]],
      dateAnioServiceReport:['', [Validators.required, Validators.min(1)]],
      NameWorkerOrder:['', [Validators.required, Validators.min(1)]]
    
    })
  }
  
  validatefooterreport(){
    console.log(this.formadatafooter)
    let auxCod : any
   
    if (this.formadatafooter.get('dateMeServiceReport')?.dirty && this.formadatafooter.get('dateAnioServiceReport')?.dirty) {
        
      this.auxMeService = this.formadatafooter.get('dateMeServiceReport')?.value.toUpperCase( )
      this.auxAnioService = parseInt(  this.formadatafooter.get('dateAnioServiceReport')?.value)+1
          
        console.log('this.auxMeService - this.auxAnioService ==='+this.auxMeService+' '+this.auxAnioService )  

    }


    if (this.formadatafooter.valid) {
      this.datafooterok = 1
      console.log('campos footer report OK :'+this.datafooterok)
      // this.validatedfooter.emit(this.datafooterok);
      this.obj = {
        nroReportService: `${this.numreportCurrent}`,
        dateService: `${this.formadatafooter.get('dateMeServiceReport')?.value.toUpperCase( )} ${this.formadatafooter.get('dateAnioServiceReport')?.value}`,
        nameworkerOrder: this.formadatafooter.get('NameWorkerOrder')?.value,
        dateproximaMantencion: `${this.auxMeService} ${this.auxAnioService}`
      }; 
      console.log( this.obj) 


       this.apitaller.sendModifyReportObjfooter(this.numreportCurrent,this.obj).subscribe(respuesta =>{
        console.log(respuesta);
        if (respuesta) {
          this.local = respuesta;
          auxCod = this.local.codigo;  
          console.log('auxCod - :'+auxCod) 
          if(auxCod===200){
            
            this.pintagenerarInforme()

       
          }
        }
      });

    } 
  }


 pintagenerarInforme(){
  // console.log('pintagriditems'+element)
  // if (element === 1) {
    let pintagrilla :  any = document.getElementById('generateReportService')  
    
    pintagrilla.classList.remove('dataitemdisabled'); 
    pintagrilla.classList.add('dataitemactivated'); 
  // }
}

ReportGenerateOK(){
  if(this.local.codigo===200){
  this.router.navigate(['/reportservice'])      
  alert('Informe Generado de forma exitosa con numero : '+this.numreportCurrent)
   

  }
}
  

}
