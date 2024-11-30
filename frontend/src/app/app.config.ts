import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ApiModule, Configuration, ConfigurationParameters } from './core/api/v1';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
              provideRouter(routes),
              provideHttpClient(),
              importProvidersFrom([ApiModule.forRoot(apiConfigFactory)])
            ],
};

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: "http://localhost:3000/api",
  };
  return new Configuration(params);
}
