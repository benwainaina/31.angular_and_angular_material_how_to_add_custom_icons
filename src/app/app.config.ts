import {
  APP_INITIALIZER,
  ApplicationConfig,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MatIconRegistry } from '@angular/material/icon';
import { provideHttpClient } from '@angular/common/http';
import { initializeAppIconsUtility } from './utilities/initializeAppIcons.utility';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),

    // APP INITIALIZERS
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppIconsUtility,
      deps: [MatIconRegistry],
    },
  ],
};
