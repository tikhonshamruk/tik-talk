import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe, signal } from '@angular/core';
import { ProfileInterface } from '../interfaces/profile.interface';
import { map, Observable, tap } from 'rxjs';
import { SubscriberInterface, User } from '../interfaces/subscriber.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

   apiUrl = 'https://icherniakov.ru/yt-course';

   profileSignal = signal<ProfileInterface | null>(null); // Создаем сигнал
  constructor(private http : HttpClient) { 
  }
  getData(): Observable<ProfileInterface[]>{
    return this.http.get<ProfileInterface[]>(`${this.apiUrl}/account/test_accounts`)
  }

  getMe(): Observable<ProfileInterface>{
    return this.http.get<ProfileInterface>(`${this.apiUrl}/account/me`).pipe(
      tap(profile =>{
        this.profileSignal.set(profile)
      })
    )
  }

  getSubscriber(): Observable<User[]>{
    return this.http.get<SubscriberInterface>(`${this.apiUrl}/account/subscribers/`).pipe(
      map(response => response.items.slice(0,3))
    )
  }

  patchProfile(profile: Partial<ProfileInterface>){
    return this.http.patch<ProfileInterface>(`${this.apiUrl}/account/me`, profile)
  }
}
 