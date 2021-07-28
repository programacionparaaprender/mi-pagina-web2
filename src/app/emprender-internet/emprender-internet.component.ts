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
import { emprender_internetjs } from './../app.state';


@Component({
  selector: 'app-emprender-internet',
  templateUrl: './emprender-internet.component.html',
  styleUrls: ['./emprender-internet.component.css']
})



export class EmprenderInternetComponent implements OnInit {
  emprender_internetjs = emprender_internetjs;
  constructor(private tioService: TioService, private router: Router,private store: Store<AppState>) { 
    

  }
  
  ngOnInit(): void {
  }

  
}
