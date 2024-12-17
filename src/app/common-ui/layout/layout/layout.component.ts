import { ProfileService } from './../../../data/services/profile.service';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{

  profileService: ProfileService = inject(ProfileService)

ngOnInit(): void {

  this.profileService.getMe().subscribe(
    (value)=>{
      console.log('Value',value)
    }
  )
}
}
