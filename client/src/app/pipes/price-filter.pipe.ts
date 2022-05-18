import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/products';

@Pipe({
  name: 'priceMax'
})
export class PriceMaxFilterPipe implements PipeTransform {
  transform(items: Product[], term: any): any {
    if (term === undefined) return items;
    return  items?.filter(t=>t?.productPrice <= term);
  }
}

@Pipe({
  name: 'priceMin'
})

export class PriceMinFilterPipe implements PipeTransform {
  transform(items: Product[], term: any): any {
    if (term === undefined) return items;
    return  items?.filter(t=>t?.productPrice >= term);
  }
}
