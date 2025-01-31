import { Component, inject, signal } from '@angular/core';
import { ProfileHeaderComponent } from '../../../common-ui/profile-header/profile-header.component';
import { ProfileService } from '../../../data/services/profile.service';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UrlPipePipe } from '../../../helps/pipes/url-pipe.pipe';
import { ProfileInterface } from '../../../data/interfaces/profile.interface';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileHeaderComponent, RouterLink, CommonModule, UrlPipePipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profileService = inject(ProfileService)
  route = inject(ActivatedRoute)

  me= this.profileService.profileSignal()

  subscribers$ = this.profileService.getSubscriber()

  profile$ = this.route.params.pipe(
    switchMap(({id})=>{
      // if(id === 'me'){
      //   return this.me
      // }
      return this.profileService.getAccount(String(id))
    })
  )
}
