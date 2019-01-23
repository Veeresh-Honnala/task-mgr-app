import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSerach'
})
export class UserSerachPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
