import { Component, input, Input } from '@angular/core';
import { ProfileInterface } from '../../data/interfaces/profile.interface';
import { UrlPipePipe } from '../../helps/pipes/url-pipe.pipe';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [UrlPipePipe],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
  profile = input<ProfileInterface | null |undefined>()
}
