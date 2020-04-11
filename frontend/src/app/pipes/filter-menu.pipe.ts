import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMenu'
})
export class FilterMenuPipe implements PipeTransform {

  transform(array: any[], column: string, arg: string): unknown {
    if(!array) return [];
    if (!arg) return array;
    if (arg==='int') return array;
    return array.filter(item => item[column]===arg || item[column]==='int');
  }

}
