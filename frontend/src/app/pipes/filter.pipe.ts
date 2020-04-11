import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array:any[], columns:[], values:[]): any[] {
    if(!array) return [];
    if(columns.length===0) return array;
    if (values.length===0) return array;
    return array.filter(
      item => {
        
      }
    );
  }

}
