import { Car } from '../_models/index';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortingDataPipe'
})
export class sortingDataPipe implements PipeTransform {

  transform(companies: Car[], path: string[], order: number): Car[] {

    // Check if is not null
    if (!companies || !path || !order) return companies;

    return companies.sort((a: Car, b: Car) => {
      // We go for each property followed by path
      path.forEach(property => {
        a = a[property];
        b = b[property];
      })

      // Order * (-1): We change our order
      return a > b ? order : order * (- 1);
    })
  }

}