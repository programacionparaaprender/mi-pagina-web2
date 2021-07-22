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
  selector: 'app-agencia-empresas',
  templateUrl: './agencia-empresas.component.html',
  styleUrls: ['./agencia-empresas.component.css']
})



export class AgenciaEmpresasComponent implements OnInit {
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
  trabajo_grado_luis = [
  {
      id:1,
      href:"https://www.facebook.com/PdvsaROriente/",
      src:"./assets/proyectos/pdvsa.svg",
      nombre:"Migración del servicio de impresión a tecnología tecnología de información libre",
      tecnologia:[
          {
              id:1,
              nombre:"bash",
              porcentaje:40,
          },
          {
              id:2,
              nombre:"samba",
              porcentaje:20,
          },
          {
              id:3,
              nombre:"cups",
              porcentaje:20,
          },
          {
              id:4,
              nombre:"Debian",
              porcentaje:20,
          },
      ],
  },
    ];
    proyectos_realizados_luis = [
    
    {
        id:1,
        href:"https://www.facebook.com/Ricana-Tours-107912725995677/",
        src:"./assets/proyectos/ricana-tours.svg" ,
        nombre:"Aplicación web con codeigniter en ricana tours",
        tecnologia:[
            {
                id:1,
                nombre:"bash",
                porcentaje:10,
            },
            {
                id:2,
                nombre:"php",
                porcentaje:10,
            },
            {
                id:3,
                nombre:"javascript",
                porcentaje:10,
            },
            {
                id:4,
                nombre:"css",
                porcentaje:10,
            },
            {
                id:5,
                nombre:"bootstrap",
                porcentaje:10,
            },
            {
                id:6,
                nombre:"jquery",
                porcentaje:10,
            },
            {
                id:7,
                nombre:"codeigniter",
                porcentaje:10,
            },
            {
                id:8,
                nombre:"git",
                porcentaje:20,
            },
            {
                id:9,
                nombre:"UML",
                porcentaje:10,
            },
        ],
    },
    {
        id:2,
        href:"https://www.facebook.com/Ricana-Tours-107912725995677/",
        src:"./assets/proyectos/ricana-tours.svg", 
        nombre:"Aplicación web con cakePHP en ricana tours",
        tecnologia:[
            {
                nombre:"bash",
                porcentaje:60,
            },
        ],
    },
    {
        id:3,
        href:"https://www.facebook.com/PdvsaROriente/",
        src:"./assets/proyectos/pdvsa.svg",
        nombre:"Migración del servicio de impresión a tecnología tecnología de información libre",
        tecnologia:[
            {
                id:1,
                nombre:"bash",
                porcentaje:40,
            },
            {
                id:2,
                nombre:"samba",
                porcentaje:20,
            },
            {
                id:3,
                nombre:"cups",
                porcentaje:20,
            },
            {
                id:4,
                nombre:"Debian",
                porcentaje:20,
            },
        ],
    },
    ];
    proyectos = [
        {
            nombre:"Geocercas con el lenguaje kotlin y google maps",
            imagen:"./assets/proyectos/kotlinmaps.png",
            url:"https://www.instagram.com/p/CK1OWPGnd3m/"
        },
        {
        nombre:"Geocercas con los frameworks ionic y angular",
        imagen:"./assets/proyectos/geocercaionic.png",
        url:"https://www.instagram.com/p/CKrHNDmn-8s/"
    },
    {
        nombre:"Geocercas con los frameworks nativescript, vuejs y google maps api",
        imagen:"./assets/proyectos/tns-geocerca.png",
        url:"https://www.instagram.com/p/CK9FdpJH96N/"
    },
    ];
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
