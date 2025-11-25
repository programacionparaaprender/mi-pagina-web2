import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from './../app.state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { emprender_internetjs } from './../app.state';



@Component({
  selector: 'app-maestria-sanmarcos',
  templateUrl: './maestria-sanmarcos.component.html',
  standalone:true,
  imports: [],
  styleUrls: ['./maestria-sanmarcos.component.css']
})
export class MaestriaSanMarcosComponent implements OnInit {
  emprender_internetjs = emprender_internetjs;
  constructor( private router: Router) { 
  }
  
  ngOnInit(): void {
  }

  
}
