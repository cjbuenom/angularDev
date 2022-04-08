import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {


  constructor() { 

    

    }

    fieldAgentExting( control : FormControl):any{

      if (control.value?.toUpperCase()=== '') {
        return{
          empty:true
        }
      }
      return null
  }

  fieldNumberCert( control : FormControl):any{

    if (control.value?.toUpperCase()=== '') {
      return{
        empty:true
      }
    }
    return null
}

// fieldCertifier( control : FormControl):any{

//   if (control.value?.toUpperCase()=== '') {
//     return{
//       empty:true
//     }
//   }
//   return null
// }




}
