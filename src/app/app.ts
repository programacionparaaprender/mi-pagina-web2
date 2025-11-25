import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UntypedFormControl, Validators} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

export interface Brand {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-pagina-web2');
  brandControl = new UntypedFormControl('', [Validators.required]);
  selectFormControl = new UntypedFormControl('', Validators.required);
  brands: Brand[] = [
    { value: 1, viewValue: 'Louis Vuitton' },
    { value: 2, viewValue: 'Gucci' },
    { value: 3, viewValue: 'Prada' },
    { value: 4, viewValue: 'Chanel' },
  ];
}
