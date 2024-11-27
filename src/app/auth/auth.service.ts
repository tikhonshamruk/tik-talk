import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthInterface } from './auth.interface';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  router = inject(Router)

  constructor(private http:HttpClient) { }

  token: string | null = null
  refreshToken: string | null = null 

  get isAuth(){
    if(!this.token){
      this.token = localStorage.getItem('token')
      this.refreshToken = localStorage.getItem('refreshToken')
    }
     return !!this.token
  }

  apiUrl = 'https://icherniakov.ru/yt-course/auth/';
  login(payload:{username: string,password:string}){
    const fd : FormData = new FormData()
    fd.append('username', payload.username)
    fd.append('password', payload.password)
    console.log(payload.username)
    console.log(payload.password)
    return this.http.post<AuthInterface>(`${this.apiUrl}token`, fd).pipe(
      tap(value  => {
        this.token = value.access_token
        this.refreshToken = value.refresh_token
        localStorage.setItem('token',this.token)
        localStorage.setItem('refreshToken',this.refreshToken)
      }
      )
    )
  }

  refreshAuthToken(){
    return this.http.post<AuthInterface>(`${this.apiUrl}refresh`,
      {
        refresh_token: this.refreshToken
      }
    ).pipe(
      tap(val => {
        this.token = val.access_token
        this.refreshToken = val.refresh_token
        localStorage.setItem('token',this.token)
        localStorage.setItem('refreshToken',this.refreshToken)
      }),
      catchError(
        err => {
          this.logout()
          return throwError(err)
        }
      )
    )
  }

  logout(){
    localStorage.clear()
    this.token = null
    this.refreshToken = null
    this.router.navigate(['/login'])
  }

  
}
