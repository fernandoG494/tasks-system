import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { authReducer } from './auth.reducer';
import { environment } from '../../environments/environment';
import { AuthState } from '../../interfaces/store.interfaces';

export interface AppState {
  session: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  session: authReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
