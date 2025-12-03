import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'age' })
export class AgePipe implements PipeTransform {
  transform(value?: number): string {
    if (value == null) return 'unknown';
    return value === 1 ? `${value} year` : `${value} years`;
  }
}
