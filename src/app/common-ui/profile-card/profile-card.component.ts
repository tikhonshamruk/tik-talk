import { Component, Input } from '@angular/core';
import { ProfileInterface } from '../../data/interfaces/profile.interface';
import { CommonModule } from '@angular/common';
import { UrlPipePipe } from '../../helps/pipes/url-pipe.pipe';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, UrlPipePipe],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  @Input() profile?: ProfileInterface 
}
