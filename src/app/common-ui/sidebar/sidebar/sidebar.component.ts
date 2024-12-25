import { Component } from '@angular/core';
import { AppSvgIconComponent } from '../../app-svg-icon/app-svg-icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AppSvgIconComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  items = [
    {
      icon: 'home', 
      span: 'Moя страница'
    },
    {
      icon: 'message',
      span: 'Чаты'
    },
    {
      icon: 'search',
      span: 'Поиск'
    }
  ]
}
