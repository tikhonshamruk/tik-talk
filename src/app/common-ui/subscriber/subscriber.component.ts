import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../data/interfaces/subscriber.interface';
import { UrlPipePipe } from '../../helps/pipes/url-pipe.pipe';

@Component({
  selector: 'app-subscriber',
  standalone: true,
  imports: [UrlPipePipe],
  templateUrl: './subscriber.component.html',
  styleUrl: './subscriber.component.scss'
})
export class SubscriberComponent implements OnInit {
  @Input() profile?: User

  ngOnInit(): void {
    console.log('profile',this.profile)
  }
}
