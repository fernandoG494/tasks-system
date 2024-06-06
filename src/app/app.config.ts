import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';
import { reducers, metaReducers } from './store/reducers';
import { AuthEffects } from './store/effects/auth.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideEffects([AuthEffects]),
    provideHttpClient(),
    provideRouter(routes),
    provideStore(reducers, { metaReducers }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
