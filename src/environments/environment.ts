// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const version = 'v1';
const name = 'microfrontend-base';
const assetsBase = `./assets/microfrontends/${name}/${version}`;
const apiBase = '/api';

export const environment = {
  production: false,
  config: {
    name: name,
    version: version,
    assets: assetsBase,
    i18n: {
      defaultLanguage: 'es',
      localeUrls: `${assetsBase}/i18n/`,
      suffix: '.json'
    },
    security: {
      allowedDomains: ['localhost:4202'],
      token: 'access_token'
    }

  },
  api: {
    base: apiBase,
    endpoints: {
      config: `${apiBase}/config/${name}-config`,
      examples: `${apiBase}/examples/`
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
