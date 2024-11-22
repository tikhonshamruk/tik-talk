import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthInterface } from './auth.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  apiUrl = 'https://icherniakov.ru/yt-course/auth/';
  login(payload:{username: string,password:string}){
    const fd : FormData = new FormData()

     access_token: string

    fd.append('username', payload.username)
    fd.append('password', payload.password)
    return this.http.post<AuthInterface>(`${this.apiUrl}token`, fd).pipe(
      tap(value => this.acc )
    )
  }
}
