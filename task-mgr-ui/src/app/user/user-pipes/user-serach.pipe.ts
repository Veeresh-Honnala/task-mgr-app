import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from 'src/app/shared/model/user.model';

@Pipe({
  name: 'userSerach'
})
export class UserSerachPipe implements PipeTransform {

  transform(userLists: UserModel[], search?: string): any {
    console.log('emp id filter '+search);
    if(search){
           return userLists.filter(user=>user.empId.startsWith(search));
    }else{
      return userLists;
    }
  }

}
