import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceorderComponent } from './serviceorder.component';

const routes: Routes = [{ path: '', component: ServiceorderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceorderRoutingModule { }
