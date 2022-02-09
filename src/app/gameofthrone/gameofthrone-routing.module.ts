import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameofthroneComponent } from './gameofthrone.component';

const routes: Routes = [{ path: '', component: GameofthroneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameofthroneRoutingModule { }
