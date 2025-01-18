import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { APP_ICONS } from '../app.icons';
import { inject } from '@angular/core';

export const initializeAppIconsUtility = () => {
  const matIconRegistry = inject(MatIconRegistry);
  const domSanitizer = inject(DomSanitizer);

  APP_ICONS.forEach((appIcon) =>
    matIconRegistry.addSvgIconLiteral(
      appIcon.name,
      domSanitizer.bypassSecurityTrustHtml(appIcon.svg)
    )
  );
};
