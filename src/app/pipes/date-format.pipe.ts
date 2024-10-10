import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe extends DatePipe implements PipeTransform {
  override transform(value: any, format: string = 'MMM d, y'): any {
    return super.transform(value, format);
  }
}
