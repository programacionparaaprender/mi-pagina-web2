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
  selector: 'app-contacto-luis',
  templateUrl: './contacto-luis.component.html',
  styleUrls: ['./contacto-luis.component.css']
})


export class ContactoLuisComponent implements OnInit {
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
contactosjs = [
  {
      id:1,
      href:"contacto_luis",
      img:"./assets/images/Luis_Correa.webp",
      alt:"Luis",
      nombre:"Luis Correa",
      titulo:"Ingeniero en Computación",
      descripcion:"Desarrollador Semisenior .Net Full Stack",
      url:"https://www.linkedin.com/in/luis-correa-36477a1b7/"
  },
  {
      id:2,
      href:"contacto_percy",
      img:"./assets/images/Percy_Correa.webp",
      alt:"Percy",
      nombre:"Percy Correa",
      titulo:"Ingeniero Civil",
      descripcion:"Diseño de Planos",
      url:"https://www.linkedin.com/in/percy-correa-a9a919ba/"
  },
  {
      id:3,
      href:"contacto_juan",
      img:"./assets/images/Juan Correa.webp",
      alt:"Juan",
      nombre:"Juan Correa",
      titulo:"Asesor Comercial",
      descripcion:"Vendedor automotriz",
      url:"https://www.linkedin.com/in/percy-correa-a9a919ba/"
  },
  {
      id:4,
      href:"contacto_yolanda",
      img:"./assets/images/Yolanda_Yancel.webp",
      alt:"Yolanda",
      nombre:"Yolanda Yancel",
      titulo:"Contador Publico",
      descripcion:"Contador publico, asistente administrativa",
      url:"https://www.linkedin.com/in/yolanda-yancel-flores-b39817111/"
  },
  {
      id:5,
      href:"contacto_patricia",
      img:"./assets/images/Patricia Correa.webp",
      alt:"Patricia",
      nombre:"Patricia Correa",
      titulo:"Medico Cirujano",
      descripcion:"Medico Cirujano",
      url:"https://www.linkedin.com/in/yolanda-yancel-flores-b39817111/"
  },
  {
      id:6,
      href:"contacto_ana",
      img:"./assets/images/Ana Correa.webp",
      alt:"Patricia",
      nombre:"Ana Correa",
      titulo:"Ingenieria Quimica",
      descripcion:"Ingenieria Quimica",
      url:"https://www.linkedin.com/in/yolanda-yancel-flores-b39817111/"
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
experiencia_luis = [
  {
      id:1,
      href:"https://www.facebook.com/SeidorPeru",
      src:"./assets/images/seidor.png" ,
      nombre:"Desarrollo de software con los lenguajes c#, server-script y sql hana, aplicación sap business one",
      tecnologia:[
          {
              id:1,
              nombre:"C#",
              porcentaje:80,
          },
          {
              id:2,
              nombre:"server-javascript",
              porcentaje:60,
          },
          {
              id:3,
              nombre:"sql hana",
              porcentaje:60,
          },
          {
              id:4,
              nombre:"sap business one client",
              porcentaje:80,
          },
          {
              id:5,
              nombre:"sap business one studio",
              porcentaje:60,
          },
          {
              id:6,
              nombre:"sap hana studio",
              porcentaje:80,
          }
      ],
  },
  
  {
      id:2,
      href:"https://www.facebook.com/Ricana-Tours-107912725995677/",
      src:"./assets/proyectos/ricana-tours.svg" ,
      nombre:"Desarrollo de software con los lenguajes javascript, php5, css3 y html5",
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
              porcentaje:10,
          },
          {
              id:9,
              nombre:"UML",
              porcentaje:10,
          },
          {
              id:7,
              nombre:"cakePHP",
              porcentaje:10,
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
  imagen:"proyectos/tns-geocerca.png",
  url:"https://www.instagram.com/p/CK9FdpJH96N/"
},
];
tecnologia:[];
  constructor(private tioService: TioService, private router: Router,private store: Store<AppState>) { 
    

  }
  
  ngOnInit(): void {
  }

  
}
