import { Component, OnInit, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Location, UpperCasePipe } from "@angular/common";
import { cursosjs, experiencia_luis, contactosjs, emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from '../app.state';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-menu',
  standalone:true,
  imports:[
    RouterModule,
    TranslatePipe,
    UpperCasePipe
  ],
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
  langs: string[] = [];



temas = [
    { valor: 'tema-claro', etiqueta: 'Tema Claro' },
    { valor: 'tema-oscuro', etiqueta: 'Tema Oscuro' }
  ];
  temaSeleccionado: string = 'tema-oscuro'; // valor por defecto

  constructor(
    private renderer: Renderer2,
    location: Location, 
    private router: Router,
    public translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(["es", "en"]);
    this.langs = [...this.translate.getLangs()];
    translate.get(this.langs).subscribe( res => {
      console.log(res);
    });
    console.log('cursos')
    console.log(this.cursosjs)
  }

  ngOnInit() {
    // Al iniciar, aplicar el tema guardado en localStorage o el por defecto
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado) {
      this.temaSeleccionado = temaGuardado;
    }
    this.cambiarTema(this.temaSeleccionado);
  }

  cambiarTema(tema: string) {
    this.temaSeleccionado = tema;
    this.aplicarTema(tema);
    localStorage.setItem('tema', tema);
  }

  aplicarTema(tema: string) {
    // Remover las clases de tema anteriores
    this.renderer.removeClass(document.body, 'tema-claro');
    this.renderer.removeClass(document.body, 'tema-oscuro');
    // Añadir la clase del tema actual
    this.renderer.addClass(document.body, tema);
  }

  cambiarLang(lang: string) {
    this.translate.use(lang);
  }
  
}
