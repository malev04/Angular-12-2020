import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
/*
Loogika on sama nagu item-list.component.ts 
class PipeTransform omab vastavalt Pipe'le iseloomulikku implementatsiooni
*/
export class UniquePipe implements PipeTransform {

  transform(value: any[]): any[] {
    return value;
    }

}
