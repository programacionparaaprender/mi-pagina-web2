import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { emprender_internetjs } from '../app.state';



@Component({
  standalone:true,
  selector: 'app-emprender-internet',
  imports: [],
  templateUrl: './emprender-internet.component.html',
  styleUrls: ['./emprender-internet.component.css']
})



export class EmprenderInternetComponent implements OnInit {
  emprender_internetjs = emprender_internetjs;
  constructor( private router: Router) { 
    

  }
  
  ngOnInit(): void {
  }

  
}
