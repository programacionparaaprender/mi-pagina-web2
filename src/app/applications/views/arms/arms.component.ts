import { Component} from '@angular/core';


@Component({
  selector: 'app-arms',
  templateUrl: './arms.component.html',
  styleUrls: ['./arms.component.css']
})
export class ArmsComponent {
  title = '';
  descripcion = '';
  constructor(){
    this.title = 'Piernas perfectas';
    this.descripcion = 'Los ejercicios de pierna y cardio son muy importantes, nos permiten mejorar en los demás ejercicios';
  }
}
