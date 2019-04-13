import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'multiply',  pure: false})
export class MultiplyPipe implements PipeTransform {
  transform(value: number): number {
    return value * 10 ;
  }
}