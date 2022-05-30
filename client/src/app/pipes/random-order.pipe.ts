import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/products';

@Pipe({ name: 'randomOrder' })
export class RandomOrderPipe implements PipeTransform {
  transform(list: any): any {
    const newList = [...list];
    newList.sort(() => Math.random() - 0.5);
    return newList;
  }
}
