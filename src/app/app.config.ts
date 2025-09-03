import { APP_INITIALIZER, ApplicationConfig, inject, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthService } from './services/auth.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';

// function initAuthFactory() {
//   const auth = inject(AuthService);
//   return () => auth.loginAtStartup().catch(() => console.warn('Login failed'));
// }
function initAuthFactory() {
  const auth = inject(AuthService);
  return () => auth.loginAtStartup().catch((error) => {
    console.error('Login startup failed:', error);
    console.error('Error details:', {
      status: error.status,
      message: error.message,
      url: error.url
    });
  });
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: initAuthFactory,
      multi: true
    }
  ]
};
