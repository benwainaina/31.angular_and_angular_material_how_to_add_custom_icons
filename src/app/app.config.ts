import {
  APP_INITIALIZER,
  ApplicationConfig,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MatIconRegistry } from '@angular/material/icon';
import { APP_ICONS } from './app.icons';
import { provideHttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * HINT: This can be moved into a utilities function
 */
const initializeAppIconsUtility = () => {
  const matIconRegistry = inject(MatIconRegistry);
  const domSanitizer = inject(DomSanitizer);

  APP_ICONS.forEach((appIcon) =>
    matIconRegistry.addSvgIconLiteral(
      appIcon.name,
      domSanitizer.bypassSecurityTrustHtml(appIcon.svg)
    )
  );
};

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
