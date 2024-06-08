import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './store/reducers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './styles/_global.scss',
})
export class AppComponent implements OnInit {
  title = 'tasks-system';

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.store
      .select((state) => state.session.user)
      .subscribe((user) => {
        if (user) {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/login']);
        }
      });
  }
}
