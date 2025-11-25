import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Location } from "@angular/common";
import { cursosjs, experiencia_luis, contactosjs, emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from '../app.state';



@Component({
  selector: 'app-menu',
  standalone:true,
  imports:[RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  nombre = '';
  email = 'zddfdfdsfd';
  password = '';
  usuariologeado = false;
  cursosjs = cursosjs;
  proyectos_realizados_luis = proyectos_realizados_luis;
  contactosjs = contactosjs;
  constructor(location: Location, private router: Router) {
    console.log('cursos')
    console.log(this.cursosjs)
  }


  ngOnInit() {
  }

}
