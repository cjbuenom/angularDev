import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Harrypotter1RoutingModule } from './harrypotter1-routing.module';
import { Harrypotter1Component } from './harrypotter1.component';


@NgModule({
  declarations: [
    Harrypotter1Component
  ],
  imports: [
    CommonModule,
    Harrypotter1RoutingModule
  ]
})
export class Harrypotter1Module { }
