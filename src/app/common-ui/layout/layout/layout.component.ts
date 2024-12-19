import { ProfileService } from './../../../data/services/profile.service';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar/sidebar.component';
import { SearchComponent } from '../../../pages/search/search/search.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, SearchComponent],
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
