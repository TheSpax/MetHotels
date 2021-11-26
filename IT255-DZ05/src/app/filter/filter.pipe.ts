import { Pipe, PipeTransform } from '@angular/core';
import { Smestaj } from '../components/smestaj/smestaj.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(smestaj: Smestaj[], inputPrice: any): Smestaj[] {
    if(!smestaj){
      return [];
    }

    if(!inputPrice){
      return smestaj;
    }

    return smestaj.filter(it => {
      return it.price <= inputPrice;
    });
  }
}
