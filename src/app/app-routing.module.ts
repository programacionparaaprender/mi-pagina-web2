import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViejaComponent } from './juegos/vieja/vieja.component';
import { TodoTasksComponent } from './tasks/todo-tasks/todo-tasks.component';
import { GeocercaGoogleComponent } from './geocerca-google/geocerca-google.component';


import { ListaTioComponent } from './tio/lista-tio.component';
import { DetalleTioComponent } from './tio/detalle-tio.component';
import { NuevoTioComponent } from './tio/nuevo-tio.component';
import { ActualizarTioComponent } from './tio/actualizar-tio.component';
import { LoginUsuariosComponent } from './tio/login-usuarios/login-usuarios.component';

import { RegistrarUsuariosComponent } from './tio/registrar-usuarios/registrar-usuarios.component';

import { EmprenderInternetComponent } from './emprender-internet/emprender-internet.component';

import { AgenciaEmpresasComponent } from './agencia-empresas/agencia-empresas.component';


import { AgenciaProfesionalesComponent } from './agencia-profesionales/agencia-profesionales.component';

import { AgenciaEmprendedoresComponent } from './agencia-emprendedores/agencia-emprendedores.component';

import { ContactoLuisComponent } from './contacto-luis/contacto-luis.component';

import { ContactoPercyComponent } from './contacto-percy/contacto-percy.component';

import { ContactoEmpresaComponent } from './contacto-empresa/contacto-empresa.component';

import { ContactoJuanComponent } from './contacto-juan/contacto-juan.component';

import { ContactoYolandaComponent } from './contacto-yolanda/contacto-yolanda.component';

import { ContactoPatriciaComponent } from './contacto-patricia/contacto-patricia.component';

import { ContactoAnaComponent } from './contacto-ana/contacto-ana.component';

import { MainComponent } from './main/main.component';

import { Tio } from './models/tio'

var usuario: Tio = {
  id: 1,
  nombre: "error",
  password: "123456",
  email: "error@gmail.com"
}


const routes: Routes = [
  { path: '' , component: MainComponent},
  {path: 'agencia_empresas' , component: AgenciaEmpresasComponent},
  {path: 'agencia_profesionales' , component: AgenciaProfesionalesComponent},
  {path: 'agencia_emprendedores' , component: AgenciaEmprendedoresComponent},

  {path: 'emprender' , component: EmprenderInternetComponent},

  {path: 'contacto_luis' , component: ContactoLuisComponent},
  {path: 'contacto_percy' , component: ContactoPercyComponent},
  {path: 'contacto_juan' , component: ContactoJuanComponent},
  {path: 'contacto_yolanda' , component: ContactoYolandaComponent},
  {path: 'contacto_patricia' , component: ContactoPatriciaComponent},
  {path: 'contacto_ana' , component: ContactoAnaComponent},

  {path: 'contacto_empresa' , component: ContactoEmpresaComponent},

  {path: 'registro' , component: RegistrarUsuariosComponent},
  {
    path: 'vieja' , component: ViejaComponent
  },
  {
    path: 'tasks' , component: TodoTasksComponent
  },
  {
    path: 'geocerca' , component: GeocercaGoogleComponent
  },
  {path: 'lista', component: ListaTioComponent},
  {path: 'detalle/:id', component: DetalleTioComponent},
  {path: 'nuevo', component: NuevoTioComponent},
  {path: 'actualizar/:id', component: ActualizarTioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
