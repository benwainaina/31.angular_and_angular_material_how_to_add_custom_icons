import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { initializeAppIconsUtility } from './utilities/initializeAppIcons.utility';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // APP INITIALIZERS
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppIconsUtility,
    },
  ],
};
