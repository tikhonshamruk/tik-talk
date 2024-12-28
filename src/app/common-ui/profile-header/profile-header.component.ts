import { Component, input, Input, OnInit } from '@angular/core';
import { ProfileInterface } from '../../data/interfaces/profile.interface';
import { UrlPipePipe } from '../../helps/pipes/url-pipe.pipe';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [UrlPipePipe, CommonModule, RouterModule],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent implements OnInit {
  profile = input<ProfileInterface | null |undefined>()

  ngOnInit(): void {
    console.log('this.profile',this.profile())
  }
}
