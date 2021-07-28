import { Component, OnInit } from '@angular/core';

//import { LatLng, LatLngLiteral, PolyMouseEvent } from '../services/google-maps-types';
import { AgmCoreModule, LatLng, LatLngLiteral, PolyMouseEvent } from '@agm/core';

import { Router } from '@angular/router';

import { AppState } from './../app.state';
import * as TaskActions from './../store/login.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from '../models/tio';
import { TioService } from '../tio/tio.service';

import { emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from './../app.state';


@Component({
  selector: 'app-agencia-empresas',
  templateUrl: './agencia-empresas.component.html',
  styleUrls: ['./agencia-empresas.component.css']
})


export class AgenciaEmpresasComponent implements OnInit {
    emprender_internetjs = emprender_internetjs;

  trabajo_grado_luis = trabajo_grado_luis;
    proyectos_realizados_luis = proyectos_realizados_luis;
    proyectos = proyectos;
    tecnologia:Array<any>;

  constructor(private tioService: TioService, private router: Router,private store: Store<AppState>) { 
    

  }
  
  obtenerDetalleTrabajoGrado(id): void{
    console.log('obtenerDetalleTrabajoGrado')
    var proyecto:any;
    for(let proyecto2 of this.trabajo_grado_luis){
            if(proyecto2.id == id){
                    proyecto = proyecto2;
            }
    }
    this.tecnologia = proyecto.tecnologia;
  }

  obtenerDetalle(id): void{
    console.log('obtenerDetalle')
    var proyecto:any;
    for(let proyecto2 of this.proyectos_realizados_luis){
            if(proyecto2.id == id){
                    proyecto = proyecto2;
            }
    }
    this.tecnologia = proyecto.tecnologia;
    
};

  
  ngOnInit(): void {
  }

  
}
