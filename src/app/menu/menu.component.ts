import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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

  constructor(location: Location, private router: Router,
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

  cambiarLang(lang: string) {
    this.translate.use(lang);
  }
  
 




  ngOnInit() {
  }

}
