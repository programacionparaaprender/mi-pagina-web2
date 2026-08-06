import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone:true,
  imports:[ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm!: FormGroup;

    constructor(private fb: FormBuilder) { 
    }

    ngOnInit(): void {
      this.registerForm = this.fb.group({
        username: ['', [Validators.required, Validators.maxLength(50)]],
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
        email: ['', [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(32)]]
      });
    }

    onSubmit(): void {
      if (this.registerForm.valid) {
        console.log('Formulario Enviado', this.registerForm.value);
      }
    }
  
}
