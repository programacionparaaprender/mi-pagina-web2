import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { ViejaComponent } from './juegos/vieja/vieja.component';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';



localStorage.setItem('URL', 'https://localhost:44382/');


  
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeocercaGoogleComponent } from './geocerca-google/geocerca-google.component';

import { AgmCoreModule } from '@agm/core';


import { MenuComponent } from './menu/menu.component';



import { EmprenderInternetComponent } from './emprender-internet/emprender-internet.component';

import { AgenciaEmpresasComponent } from './agencia-empresas/agencia-empresas.component';

import { AgenciaProfesionalesComponent } from './agencia-profesionales/agencia-profesionales.component';

import { AgenciaEmprendedoresComponent } from './agencia-emprendedores/agencia-emprendedores.component';

import { ContactoLuisComponent } from './contacto-luis/contacto-luis.component';

import { ContactoPercyComponent } from './contacto-percy/contacto-percy.component';

import { FooterComponent } from './footer/footer.component';

import { ContactoJuanComponent } from './contacto-juan/contacto-juan.component';

import { ContactoEmpresaComponent } from './contacto-empresa/contacto-empresa.component';

import { ContactoYolandaComponent } from './contacto-yolanda/contacto-yolanda.component';

import { ContactoPatriciaComponent } from './contacto-patricia/contacto-patricia.component';

import { ContactoAnaComponent } from './contacto-ana/contacto-ana.component';

import { ContactoJermanyComponent } from './contacto-jermany/contacto-jermany.component';

import { MainComponent } from './main/main.component';

import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    ViejaComponent,
    GeocercaGoogleComponent,
    MenuComponent,
    EmprenderInternetComponent,
    AgenciaEmpresasComponent,
    AgenciaProfesionalesComponent,
    AgenciaEmprendedoresComponent,
    ContactoLuisComponent,
    ContactoPercyComponent,
    FooterComponent,
    ContactoEmpresaComponent,
    ContactoJuanComponent,
    ContactoYolandaComponent,
    ContactoPatriciaComponent,
    ContactoAnaComponent,
    ContactoJermanyComponent,
    MainComponent,
    BannerComponent
  ],
  imports: [
    
  
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZktO_JnnvrY4BnD2IyZo8PqNXiDTWP1w'
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
