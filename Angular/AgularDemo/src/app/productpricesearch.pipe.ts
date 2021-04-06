import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './products/IProduct';

@Pipe({
  name: 'productpricesearch'
})
export class ProductpricesearchPipe implements PipeTransform {

  transform(value: IProduct[], args: number): IProduct[] {
    if(!args){
      return value;
    }
    return value.filter(
      item => item.Price >= Number(args)
    )
  }

}