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

@Component({
  selector: 'app-agencia-emprendedores',
  templateUrl: './agencia-emprendedores.component.html',
  styleUrls: ['./agencia-emprendedores.component.css']
})


export class AgenciaEmprendedoresComponent implements OnInit {
  emprender_internetjs = [
    {
        id:1,
        target:"_blank",  
        class:"dropdown-item", 
        href:"https://www.youtube.com/watch?v=1lfbTa32MEk",
        nombre:"Crear un bot para tu página web con chatfuel",
        src:"./assets/proyectos/ricana-tours.svg" ,
    },
    {
        id:2,
        target:"_blank",  
        class:"dropdown-item", 
        href:"https://www.udemy.com/course/adp-bonao-facebook-como-herramienta-educativa/learn/lecture/13147022?start=0#overview",
        nombre:"Crea tu página en facebook",
        src:"./assets/proyectos/ricana-tours.svg" ,
    },
];
  constructor(private tioService: TioService, private router: Router,private store: Store<AppState>) { 
    

  }
  
  ngOnInit(): void {
  }

  
}
