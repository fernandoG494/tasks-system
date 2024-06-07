import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { Router } from '@angular/router';
import { AppState } from '../../store/reducers';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  imports: [
    ButtonModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    LayoutComponent,
  ],
  selector: 'app-register',
  standalone: true,
  styleUrl: './register.component.scss',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  name: string = '';
  username: string = '';
  password: string = '';

  constructor(private store: Store<AppState>, private router: Router) {}

  register() {
    console.log(this.username, this.password);
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
