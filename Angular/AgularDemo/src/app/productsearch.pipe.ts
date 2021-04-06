import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './products/IProduct';

@Pipe({
  name: 'productsearch'
})
export class ProductsearchPipe implements PipeTransform {

  transform(value: IProduct[], args: string): IProduct[] {
    if(!args){
      return value;
    }
    return value.filter(
      item => item.Name.toLowerCase().indexOf(args.toLowerCase()) > -1)
  }

}
