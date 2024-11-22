import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlPipe',
  standalone: true
})
export class UrlPipePipe implements PipeTransform {


  transform(value: string | null | undefined): string | null {
    if(!value){
      return null
    }
    return `https://icherniakov.ru/yt-course/${value}`;
  }

}
