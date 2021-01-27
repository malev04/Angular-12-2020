import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../item.model';

@Pipe({
  name: 'unique'
})
/*
Loogika on sama nagu item-list.component.ts 
class PipeTransform omab vastavalt Pipe'le iseloomulikku implementatsiooni
*/
export class UniquePipe implements PipeTransform {
  transform(value: Item[]): Item[] {
    /*
    *ngFor="let product of products; let i = index"
    vasakul on nagu ülemine, parem on nagu siin all
    product == el
    i == index
    products == array
    */
    let uniqueArray = value.filter((el, index, array) => {
      // map on massiivi muutmine -> massiiv kategooriatest (enne oli toodetest)
      // {title: "Küpsis", price: 1.19, imgSrc: "wwwcom", category: "snack"}, ...
      // "piimatooted", "snack", "snack", "snack", ...
      return (array.map(arrayEl=>arrayEl.category))
        .indexOf(el.category)==index;
    });
    // kui ma küsin indexOf'ga INDEXit, siis ta annab alati kõige esimese indexi
    // snack -> 0 
    return uniqueArray;
    }

}
