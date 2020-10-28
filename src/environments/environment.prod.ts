const version = 'v1';
const name = 'microfrontend-base';
const assetsBase = `./assets/microfrontends/${name}/${version}`;
const apiBase = '/api';

export const environment = {
  production: true,
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
