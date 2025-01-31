import { ProfileService } from './../../../data/services/profile.service';
import { Component, inject, OnInit } from '@angular/core';
import { AppSvgIconComponent } from '../../app-svg-icon/app-svg-icon.component';
import { CommonModule } from '@angular/common';
import { SubscriberComponent } from '../../subscriber/subscriber.component';
import { RouterModule } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { UrlPipePipe } from '../../../helps/pipes/url-pipe.pipe';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AppSvgIconComponent, CommonModule, SubscriberComponent,RouterModule, UrlPipePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{

  profileService = inject(ProfileService)

  profile$ = this.profileService.profileSignal;

  subscribers$ = this.profileService.getSubscriber()
  
  items = [
    {
      icon: 'home', 
      span: 'Moя страница',
      link: '/profile/me'
    },
    {
      icon: 'message',
      span: 'Чаты',
      link: 'message'
    },
    {
      icon: 'search',
      span: 'Поиск',
      link: 'search'
    }
  ]
  ngOnInit(): void {
    firstValueFrom(this.profileService.getMe())
  }

}
