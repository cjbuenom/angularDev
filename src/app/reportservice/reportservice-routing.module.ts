import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportserviceComponent } from './reportservice.component';

const routes: Routes = [{ path: '', component: ReportserviceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportserviceRoutingModule { }
