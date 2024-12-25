import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg[icon]',
  standalone: true,
  imports: [],
  template: '<svg><use [attr.href]="href"></use></svg>',
  styles: [
    `
    // :host{
    // position: relative;
    // }
    // svg{
    // position: absolute;
    // top: 50%;
    //  transform: translateY(-50%);
    // }
    `
  ]
})
export class AppSvgIconComponent {

  @Input() icon: string = '';

  get href(){
    return `../assets/${this.icon}-icon.svg#${this.icon}`
  }
}
