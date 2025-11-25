import { Component, OnInit } from '@angular/core';

import { serviciosjs, cursosjs, experiencia_luis, contactosjs, emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from '../app.state';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-servicios-contacto',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './servicios-contacto.component.html',
  styleUrls: ['./servicios-contacto.component.css']
})
export class ServiciosContactoComponent implements OnInit {
    servicios = serviciosjs;
    constructor() { 
    

    }
  
    ngOnInit(): void {
    }

  
}
