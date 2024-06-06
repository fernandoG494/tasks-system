import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AuthState, authReducer } from './auth.reducer';
import { environment } from '../../environments/environment';

export interface AppState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
