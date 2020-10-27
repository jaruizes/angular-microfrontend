import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { MicrofrontendBaseComponent } from './components/microfrontend-base/microfrontend-base.component';
import { LazyElementsModule } from '@angular-extensions/elements';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ConfigService } from './services/config/config.service';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, environment.config.i18n.localeUrls, environment.config.i18n.suffix);
}

export function appInit(appConfigService: ConfigService) {
  return () => appConfigService.load();
}

export function tokenGetter() {
  return sessionStorage.getItem(environment.config.security.token);
}

@NgModule({
  declarations: [
    MicrofrontendBaseComponent
  ],
  imports: [
    BrowserModule,
    LazyElementsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: environment.config.i18n.defaultLanguage,
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: environment.config.security.allowedDomains
      },
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      multi: true,
      deps: [ConfigService]
    }
  ],
  bootstrap: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    MicrofrontendBaseComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const mainCE = createCustomElement(MicrofrontendBaseComponent, { injector: this.injector });
    if (!customElements.get(environment.config.name)) {
      customElements.define(environment.config.name, mainCE);
    }
  }
}
