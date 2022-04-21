import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportserviceRoutingModule } from './reportservice-routing.module';
import { ReportserviceComponent } from './reportservice.component';

import { DatareportserviceComponent } from './components/datareportservice/datareportservice.component';
import { GridatareportComponent } from './components/gridatareport/gridatareport.component';
import { FootereportserviceComponent } from './components/footereportservice/footereportservice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReportserviceComponent,
    DatareportserviceComponent,
    GridatareportComponent,
    FootereportserviceComponent
  ],
  imports: [
    CommonModule,
    ReportserviceRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReportserviceModule { }
