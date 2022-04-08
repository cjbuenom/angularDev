import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepublicoComponent } from './components/homepublico/homepublico.component';
// import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthModule } from '@auth0/auth0-angular';
// import { ServiceorderComponent } from './components/serviceorder/serviceorder.component';
import { SlidepublicComponent } from './components/slidepublic/slidepublic.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HomepublicoComponent,
    HeaderComponent,
    SlidepublicComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-61egfc2i.us.auth0.com',
      clientId: 'ioWlX9VkjW6BNmBbPNGvCcLSBos8cvfx'
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
