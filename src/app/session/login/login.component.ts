import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { AppState } from '../../store/reducers';
import { InputTextModule } from 'primeng/inputtext';
import { LayoutComponent } from '../../shared/layout/layout.component';

@Component({
  imports: [
    ButtonModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    LayoutComponent,
  ],
  selector: 'app-login',
  standalone: true,
  styleUrl: './login.component.scss',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private store: Store<AppState>, private router: Router) {}

  login() {
    console.log(this.username, this.password);
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }
}
