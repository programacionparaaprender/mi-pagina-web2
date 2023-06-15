import { Component} from '@angular/core';


@Component({
  selector: 'app-legs',
  templateUrl: './legs.component.html',
  styleUrls: ['./legs.component.css']
})
export class LegsComponent {
  title = '';
  descripcion = '';
  partesentrenar = '';
  constructor(){
    this.title = 'Piernas perfectas';
    this.descripcion = 'Los ejercicios de pierna y cardio son muy importantes, nos permiten mejorar en los demás ejercicios, ya que nos permiten mantener esa agilidad y velocidad al realizar los movimientos, nos permiten estar más atentos.';
    this.partesentrenar = 'Tenemos para entrenar las piernas los ejercicios de tobillo, cuadriceps, bicep posterior y gluteos.';
  }
}
