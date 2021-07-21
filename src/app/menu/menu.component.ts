import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { AppState } from './../app.state';
import * as TaskActions from './../store/login.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from '../models/tio';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginUsuariosComponent } from '../tio/login-usuarios/login-usuarios.component';

import { Location } from "@angular/common";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  //@ViewChild(LoginUsuariosComponent) child;

  login: Observable<Tio[]>;
  tio: Tio;
  nombre = '';
  email = 'zddfdfdsfd';
  password = '';
  usuariologeado = false;
  cursosjs = [
    {
        target:"_self",
        class:"dropdown-item",
        href:"/emprender",
        nombre:"Emprender por internet"
    },
    { 
              target:"_blank", 
              class:"dropdown-item", 
              href:"https://www.instagram.com/p/CK1OWPGnd3m/",
              nombre:"Geocercas con el lenguaje kotlin y google maps"
    },
    {
        target:"_blank",
        class:"dropdown-item",
        href:"https://www.instagram.com/p/CKrHNDmn-8s/",
        nombre:"Geocerca Ionic"
    },
  ];
  proyectos_realizados_luis = [
      
    {
        id:1,
        href:"https://www.facebook.com/Ricana-Tours-107912725995677/",
        src:"proyectos/ricana-tours.svg" ,
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
        src:"proyectos/ricana-tours.svg", 
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
        src:"proyectos/pdvsa.svg",
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
  contactosjs = [
    {
        id:1,
        href:"/contacto_luis",
        img:"images/Luis_Correa.webp",
        alt:"Luis",
        nombre:"Luis Correa",
        titulo:"Ingeniero en Computación",
        descripcion:"Desarrollador Semisenior .Net Full Stack",
        url:"https://www.linkedin.com/in/luis-correa-36477a1b7/"
    },
    {
        id:2,
        href:"/contacto_percy",
        img:"images/Percy_Correa.webp",
        alt:"Percy",
        nombre:"Percy Correa",
        titulo:"Ingeniero Civil",
        descripcion:"Diseño de Planos",
        url:"https://www.linkedin.com/in/percy-correa-a9a919ba/"
    },
    {
        id:3,
        href:"/contacto_juan",
        img:"images/Juan Correa.webp",
        alt:"Juan",
        nombre:"Juan Correa",
        titulo:"Asesor Comercial",
        descripcion:"Vendedor automotriz",
        url:"https://www.linkedin.com/in/percy-correa-a9a919ba/"
    },
    {
        id:4,
        href:"/contacto_yolanda",
        img:"images/Yolanda_Yancel.webp",
        alt:"Yolanda",
        nombre:"Yolanda Yancel",
        titulo:"Contador Publico",
        descripcion:"Contador publico, asistente administrativa",
        url:"https://www.linkedin.com/in/yolanda-yancel-flores-b39817111/"
    },
    {
        id:5,
        href:"/contacto_patricia",
        img:"images/Patricia Correa.webp",
        alt:"Patricia",
        nombre:"Patricia Correa",
        titulo:"Medico Cirujano",
        descripcion:"Medico Cirujano",
        url:"https://www.linkedin.com/in/yolanda-yancel-flores-b39817111/"
    },
    {
        id:6,
        href:"/contacto_ana",
        img:"images/Ana Correa.webp",
        alt:"Patricia",
        nombre:"Ana Correa",
        titulo:"Ingenieria Quimica",
        descripcion:"Ingenieria Quimica",
        url:"https://www.linkedin.com/in/yolanda-yancel-flores-b39817111/"
    },
  ];
  constructor(location: Location, private router: Router, private store: Store<AppState>) {
    
  }


  ngOnInit() {
  }

}
