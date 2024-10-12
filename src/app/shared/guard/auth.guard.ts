import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';
import { AuthService } from '../../auth/login/service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const service = inject(AuthService);
  if (service.isAuth()) {
    return true;
  } else {
    router.navigate(['/login'])

  return false;
  }
}
