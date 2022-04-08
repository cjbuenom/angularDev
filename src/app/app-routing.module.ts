import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepublicoComponent } from './components/homepublico/homepublico.component';
// import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
// import { ServiceorderComponent } from './components/serviceorder/serviceorder.component';


const routes: Routes = [
  {path:'homepublico', component:HomepublicoComponent},
  // {path:'profile', component:ProfileComponent, canActivate:[AuthGuard]},
  // {path:'ordenservicio', component:ServiceorderComponent, canActivate:[AuthGuard]},
  {path:'', pathMatch:'full', redirectTo:'/homepublico'},
  { path: 'serviceorder', loadChildren: () => import('./serviceorder/serviceorder.module').then(m => m.ServiceorderModule), canActivate:[AuthGuard]},
  { path: 'reportservice', loadChildren: () => import('./reportservice/reportservice.module').then(m => m.ReportserviceModule), canActivate:[AuthGuard] } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
