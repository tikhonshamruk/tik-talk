import { AuthService } from './auth.service';
import { HttpErrorResponse, HttpEventType, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, map, Observable, switchMap, tap, throwError } from "rxjs";
import { ProfileInterface } from '../data/interfaces/profile.interface';
import { AuthInterface } from './auth.interface';


// let isRefreshing = false

export const loggingInterceptorFunctional: HttpInterceptorFn = (req, next) => {

    console.log('Request URL: ' + req.url);

    console.log(req)

    const token = inject(AuthService)

    if(!token) return next(req)

        req = req.clone(
            {
                setHeaders :{
                     Authorization: `Bearer ${token}`
                }
            }
        )

        return next(req)

    // const authServer = inject(AuthService)

    // const token : null | string = authServer.token

    // if(!token) return next(req); 

    //   if(isRefreshing){
    //     return refreshAndProcces(authServer, req, next)
    //   }

    //   const addToken = (req: HttpRequest<any>, token:string) => {
    //     return req.clone({
    //       setHeaders : {
    //         Authorization: `Bearer ${token}`
    //       }
    //     })
    //   }

    //  req = req.clone({
    //     setHeaders : {
    //       Authorization: `Bearer ${token}`
    //     }
    //   })
    // return next(req).pipe(tap(event => {
    //   console.log(event)
    // }));

    // return next(addToken(req, token)).pipe(
    //   catchError(err=>{
    //     console.log('Произошла ошибка:', err)
    //     if(err.status === 403){
    //       return refreshAndProcces(authServer , req, next)
    //     }
    //     return throwError(err)
    //   })
    // )

    function refreshAndProcces(authServer: AuthService, req: HttpRequest<any>, next: HttpHandlerFn){
      if(!isRefreshing){
        isRefreshing = true
        return authServer.refreshAuthToken()
        .pipe(
          switchMap(res =>{
            isRefreshing = false
            return next(addToken(req, res.access_token))
          })
        )
      }
      return next(addToken(req, authServer.token!))
    }


    
  } 