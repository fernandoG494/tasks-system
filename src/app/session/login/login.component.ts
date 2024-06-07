import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { AppState } from '../../store/reducers';
import { InputTextModule } from 'primeng/inputtext';
import { LayoutComponent } from '../../shared/layout/layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    ButtonModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    LayoutComponent,
  ],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private store: Store<AppState>) {}

  login() {
    console.log(this.username, this.password);
  }
}
