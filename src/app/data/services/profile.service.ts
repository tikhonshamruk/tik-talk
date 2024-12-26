import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileInterface } from '../interfaces/profile.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

   apiUrl = 'https://icherniakov.ru/yt-course';
  constructor(private http : HttpClient) { 
    
  }
  getData(): Observable<ProfileInterface[]>{
    return this.http.get<ProfileInterface[]>(`${this.apiUrl}/account/test_accounts`)
  }

  getMe(): Observable<ProfileInterface>{
    return this.http.get<ProfileInterface>(`${this.apiUrl}/account/me`)
  }

  
}
 