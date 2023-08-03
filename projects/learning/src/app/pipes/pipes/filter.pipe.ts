import {Pipe, PipeTransform} from "@angular/core";


@Pipe({'name': 'filter'})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterValue: string, property: string): any {

    if (filterValue.length === 0) {
      return value;
    }

    const result = [];

    for (const item of value) {
      if (item[property] === filterValue) {
        result.push(item)
      }
    }
    return result;
  }
}
