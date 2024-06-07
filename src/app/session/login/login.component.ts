import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { AppState } from '../../store/reducers';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private store: Store<AppState>) {}

  login() {
    console.log(this.username, this.password);
  }
}
