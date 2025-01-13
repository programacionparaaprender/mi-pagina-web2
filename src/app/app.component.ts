import { Component } from '@angular/core';
import {UntypedFormControl, Validators} from '@angular/forms';

export interface Brand {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularrouter';
  brandControl = new UntypedFormControl('', [Validators.required]);
  selectFormControl = new UntypedFormControl('', Validators.required);
  brands: Brand[] = [
    { value: 1, viewValue: 'Louis Vuitton' },
    { value: 2, viewValue: 'Gucci' },
    { value: 3, viewValue: 'Prada' },
    { value: 4, viewValue: 'Chanel' },
  ];
}
