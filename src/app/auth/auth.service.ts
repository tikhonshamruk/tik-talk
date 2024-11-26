import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthInterface } from './auth.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }

  token: string | null = null
  refreshToken: string | null = null 

  get isAuth(){
     return !!this.token
  }

  apiUrl = 'https://icherniakov.ru/yt-course/auth/';
  login(payload:{username: string,password:string}){
    const fd : FormData = new FormData()
    fd.append('username', payload.username)
    fd.append('password', payload.password)
    return this.http.post<AuthInterface>(`${this.apiUrl}token`, fd).pipe(
      tap(value  => {
        this.token = value.access_token
        this.refreshToken = value.refresh_token
      }
      )
    )
  }
}
