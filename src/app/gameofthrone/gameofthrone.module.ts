import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameofthroneRoutingModule } from './gameofthrone-routing.module';
import { GameofthroneComponent } from './gameofthrone.component';


@NgModule({
  declarations: [
    GameofthroneComponent
  ],
  imports: [
    CommonModule,
    GameofthroneRoutingModule
  ]
})
export class GameofthroneModule { }
