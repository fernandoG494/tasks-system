import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { AuthService } from '../../services/auth.services';

interface RegisterStatus {
  status: string;
  message: string;
}

@Component({
  imports: [
    ButtonModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    LayoutComponent,
    ReactiveFormsModule,
  ],
  selector: 'app-register',
  standalone: true,
  styleUrl: './register.component.scss',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  public registerForm: FormGroup;

  public registerStatus: RegisterStatus = {
    status: '',
    message: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      this.getFormErrors();
      return;
    }

    const { name, password, email } = this.registerForm.value;

    this.authService.register(name, password, email).subscribe({
      next: (response) => {
        this.registerStatus = {
          status: response.status,
          message: response.message,
        };
        setTimeout(() => {
          this.redirectToLogin();
        }, 4000);
      },
      error: (error) => {
        console.error('Error en el registro', error);
      },
    });
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  isValidField(field: string): boolean | null {
    return (
      this.registerForm.controls[field].errors &&
      this.registerForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.registerForm.controls[field]) return null;
    const errors = this.registerForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
        case 'email':
          return 'Formato de email inválido';
      }
    }
    return null;
  }

  getFormErrors() {
    const formErrors: { [key: string]: string } = {};

    Object.keys(this.registerForm.controls).forEach((key) => {
      const controlErrors = this.registerForm.get(key)?.errors;
      if (controlErrors) {
        formErrors[key] = this.getFieldError(key) || '';
      }
    });
    return formErrors;
  }

  buttonDisabled() {
    return this.registerForm.invalid;
  }

  showRegisterStatus() {
    return this.registerStatus.status != '';
  }
}
