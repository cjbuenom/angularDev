import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExtinguisheritemService {

  private urlApimoduloTaller  = 'http://localhost:3000'



  constructor( private http:HttpClient) { }

  // getData(){
  //   return this.items;
  // }

  getItemsOrderServices(){
    return this.http.get(this.urlApimoduloTaller+'/itemsorderservice')
  }
  
  getItemsOrderServicesCurrent(numberOrder:any){        
    return this.http.get(`${this.urlApimoduloTaller}/itemsorderservice/${numberOrder}`);
  }


  sendOrderCompleted(itemcurrect:any){    
    return this.http.post(this.urlApimoduloTaller + '/orderscompleted', itemcurrect);
  }

  senditemserviceorder(itemcurrect:any){    
    return this.http.post(this.urlApimoduloTaller + '/newitemorder', itemcurrect);
  }


  getallReportCompleted(){
    return this.http.get(this.urlApimoduloTaller + '/reportscompleted');
  }

  sendReportobjCompleted(itemcurrect:any){    
    return this.http.post(this.urlApimoduloTaller + '/newreportfororderservice/', itemcurrect);
  }

  sendModifyReportObjOrderService(itemcurrect:any){    
    return this.http.put(`${this.urlApimoduloTaller}/newreportfororderservice/`, itemcurrect);
    
  }

  sendModifyReportObjfooter(itemcurrect:any,itemcurrent1:any){    
    return this.http.put(`${this.urlApimoduloTaller}/newreportfororderservice/${itemcurrect}`, itemcurrent1);
    
  }


}
