import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Путь должен соответствовать вашему проекту

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuth) {
    return true;
  } else {
    router.navigate(['/login']); // Перенаправьте пользователя на страницу входа
    return false;
  }
};