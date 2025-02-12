import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggingInterceptorFunctional } from './auth/auth.interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(
      withInterceptors([loggingInterceptorFunctional]),
    ),
    {provide:LocationStrategy,useClass:HashLocationStrategy}
  ]

};
