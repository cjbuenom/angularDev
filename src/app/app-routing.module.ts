import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: 'gameofthrone', loadChildren: () => import('./gameofthrone/gameofthrone.module').then(m => m.GameofthroneModule) },
 { path: 'harrypotter1', loadChildren: () => import('./harrypotter1/harrypotter1.module').then(m => m.Harrypotter1Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
