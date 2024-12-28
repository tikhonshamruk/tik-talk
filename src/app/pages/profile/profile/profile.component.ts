import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../../../common-ui/profile-header/profile-header.component';
import { ProfileService } from '../../../data/services/profile.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileHeaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profileService = inject(ProfileService)

  me = this.profileService.profileSignal()
 
}
