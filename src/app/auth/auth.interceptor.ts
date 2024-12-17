import { AuthService } from './auth.service';
import { HttpErrorResponse, HttpEventType, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, map, Observable, of, switchMap, tap, throwError } from "rxjs";
import { ProfileInterface } from '../data/interfaces/profile.interface';
import { AuthInterface } from './auth.interface';


// let isRefreshing = false

export const loggingInterceptorFunctional: HttpInterceptorFn = (req, next) => {

  // return next(req)
   const authService = inject(AuthService);
   const token = authService.token

    if(!token) return next(req)

      const addToken = (req:HttpRequest<any>, token:string)=>{
        return  req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        })
      }

    return next(addToken(req,token)).pipe(
     catchError((error: HttpErrorResponse) => {
    if (error.status === 403) {
      return refreshAndProceed(); // Предполагается, что refreshAndProceed возвращает Observable
    }
    return throwError(error);
  })
    )

    function refreshAndProceed(): Observable<any> {
      // Реализуйте логику обновления токена и возвращайте Observable
      return authService.refreshAuthToken().pipe(
        switchMap((res)=>{
          return next(addToken(req, res.access_token))
        })
      )
    }

    
  } 