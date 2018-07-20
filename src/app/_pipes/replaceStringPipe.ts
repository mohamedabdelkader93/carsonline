import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'replaceHeightAndWidth'})
export class replaceHeightAndWidth implements PipeTransform {
  transform(value: string): string {
    return value.replace('[w]', '300').replace('[h]', '300')
  }
}