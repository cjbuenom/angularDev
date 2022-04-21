import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceorderRoutingModule } from './serviceorder-routing.module';
import { ServiceorderComponent } from './serviceorder.component';
import { DataitemComponent } from './components/dataitem/dataitem.component';
import { GriditemsComponent } from './components/griditems/griditems.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataorderComponent } from './components/dataorder/dataorder.component';


@NgModule({
  declarations: [
    ServiceorderComponent,
    DataitemComponent,
    GriditemsComponent,
    DataorderComponent
  ],
  imports: [
    CommonModule,
    ServiceorderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ServiceorderModule { }
