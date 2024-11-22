import { Component, OnInit } from '@angular/core';
import { ProfileInterface } from '../../../data/interfaces/profile.interface';
import { ProfileService } from '../../../data/services/profile.service';
import { ProfileCardComponent } from '../../../common-ui/profile-card/profile-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ProfileCardComponent, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent  implements OnInit{
  data: ProfileInterface[] = [];
  constructor(private myProfileService : ProfileService){
  }

  ngOnInit(): void{
    this.myProfileService.getData().subscribe(
      (response: ProfileInterface[]) =>{
        this.data = response;
        console.log(response)
      }, 
      (error) => {
        console.log('Ошибка!', error)
      }
    )
  }
}
