import { AuthService } from './auth.service';
import { HttpErrorResponse, HttpEventType, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, map, tap, throwError } from "rxjs";

export const loggingInterceptorFunctional: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('/auth/token')) {
    return next(req); // Не добавляем заголовок для запросов к '/auth/token'
}
    console.log('Request URL: ' + req.url);

    const token: string | null = inject(AuthService).token

    if(!token) return next(req)

     req = req.clone({
        setHeaders : {
          Authorization: `Bearer ${token}`
        }
      })
    // return next(req).pipe(tap(event => {
    //   console.log(event)
    // }));

    return next(req)
  }