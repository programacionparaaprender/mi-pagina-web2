import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from '../app.state';


@Component({
  selector: 'app-agencia-profesionales',
  standalone:true,
  templateUrl: './agencia-profesionales.component.html',
  styleUrls: ['./agencia-profesionales.component.css']
})
export class AgenciaProfesionalesComponent implements OnInit {
  emprender_internetjs = emprender_internetjs;
  constructor(private router: Router) { 
    

  }
  
  ngOnInit(): void {
  }

  
}
