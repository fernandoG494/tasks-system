import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { login, loginFailure, loginSuccess } from '../actions/auth.actions';
import { AuthService } from '../../services/auth.services';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap((action) =>
        this.authService.login(action.username, action.password).pipe(
          map((user) => loginSuccess({ user })),
          catchError((error) => of(loginFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
