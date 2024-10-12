import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // Inject the current `AuthService` and use it to get an authentication token:
  const authToken = inject(AuthService).getAuthToken();
  if (authToken) {
    // Clone the request to add the authentication header.
    const newReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    console.log(newReq)
    return next(newReq);
  }

  return next(req);
};
