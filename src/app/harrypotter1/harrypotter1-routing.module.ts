import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Harrypotter1Component } from './harrypotter1.component';

const routes: Routes = [{ path: '', component: Harrypotter1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Harrypotter1RoutingModule { }
