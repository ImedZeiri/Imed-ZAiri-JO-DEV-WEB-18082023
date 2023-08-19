import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
  transform(value: any): string {
    if (!value) {
      return '';
    }
    return value.toUpperCase();
  }
}
