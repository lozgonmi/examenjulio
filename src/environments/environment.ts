// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { redesPopulares } from "src/app/shared/redes/redesPopulares";

export const environment = {
  production: false,
  host: 'http://localhost:8099/',
  title: 'RecuAngular',
  logo: 'assets/img/ACING.png',
  favicon: 'assets/favicon.ico',
  marca: ' Miguel Angel  Lozano',
  webMarca: '/',
  rrss: [
    { red: redesPopulares.facebook, url: 'https://www.facebook.com/ ' },
      {red: redesPopulares.github, url: 'https://www.github.com/'},
    { red: redesPopulares.linkedin, url: 'https://www.linkedin.com/' },
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
