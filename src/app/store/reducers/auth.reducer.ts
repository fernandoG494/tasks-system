import { createReducer, on } from '@ngrx/store';
import {
  login,
  loginFailure,
  loginSuccess,
  logout,
  register,
  registerFailure,
  registerSuccess,
} from '../actions/auth.actions';
import { AuthState } from '../../interfaces/store.interfaces';

export const initialState: AuthState = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({
    ...state,
  })),
  on(loginSuccess, (state, { user }) => ({
    ...state,
    user,
  })),
  on(loginFailure, (state) => ({
    ...state,
    user: null,
  })),
  on(logout, (state) => ({
    ...state,
    user: null,
  })),
  on(register, (state) => ({
    ...state,
  })),
  on(registerSuccess, (state) => ({
    ...state,
  })),
  on(registerFailure, (state) => ({
    ...state,
  }))
);
