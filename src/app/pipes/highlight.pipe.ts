import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, args: string): string {
    if (!args) return value;
    return value.replace(new RegExp(args, 'gi'), match => {
      return '<span class="highlight-text">' + match + '</span>';
    });
  }
}
