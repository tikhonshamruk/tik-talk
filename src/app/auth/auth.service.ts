import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
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
    return this.http.post<AuthInterface>(`${this.apiUrl}token`,fd).pipe(
      tap(value  => {
        this.saveToken(value)
       }
      )
      ,
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    console.log('localStorage', localStorage.getItem('token'))
    // Обработка ошибок авторизации
    if (error.status === 401) {
      console.error('Несанкционированный доступ - ошибка 401');
      // Здесь можно добавить логику для перенаправления на страницу входа или уведомления пользователя
    }
    // Обработка сетевых ошибок
    else if (error.status === 0) {
      console.error('Сетевая ошибка - проверьте подключение к интернету');
    } else {
      console.error(`Ошибка: ${error.status}, сообщение: ${error.message}`);
    }
    return throwError('Что-то пошло не так; попробуйте еще раз позже.');
  }

  // refreshAuthToken(){
  //   return this.http.post<AuthInterface>(`${this.apiUrl}refresh`,
  //     {
  //       refresh_token: this.refreshToken
  //     }
  //   ).pipe(
  //     tap(val => {
  //       this.saveToken(val)
  //     }),
  //     catchError(
  //       err => {
  //         this.logout()
  //         return throwError(err)
  //       }
  //     )
  //   )
  // }

  // logout(){
  //   localStorage.clear()
  //   this.token = null
  //   this.refreshToken = null
  //   this.router.navigate(['/login'])
  // }

  saveToken(res: AuthInterface) {
    this.token = res.access_token
    this.refreshToken = res.refresh_token
    localStorage.setItem('token',this.token)
    localStorage.setItem('refreshToken',this.refreshToken)
  }

  
}
