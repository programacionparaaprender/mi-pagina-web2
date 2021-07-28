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
  selector: 'app-agencia-profesionales',
  templateUrl: './agencia-profesionales.component.html',
  styleUrls: ['./agencia-profesionales.component.css']
})


export class AgenciaProfesionalesComponent implements OnInit {
  emprender_internetjs = emprender_internetjs;
  constructor(private tioService: TioService, private router: Router,private store: Store<AppState>) { 
    

  }
  
  ngOnInit(): void {
  }

  
}
