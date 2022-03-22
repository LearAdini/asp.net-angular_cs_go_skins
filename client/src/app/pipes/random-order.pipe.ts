import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'randomOrder' })
export class RandomOrderPipe implements PipeTransform {
  transform(list: Array<any>): Array<any> {
    const newList = [...list];
    newList.sort(() => Math.random() - 0.5);
    return newList;
  }
}
