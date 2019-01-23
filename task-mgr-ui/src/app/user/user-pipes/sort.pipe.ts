import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from 'src/app/shared/model/user.model';

@Pipe({
  name: 'sort'
  // ,pure:false
})
export class SortPipe implements PipeTransform {

  transform(userLists: UserModel[], sortString?: any): any {
    console.log('from ---> pipe '+sortString);
    if(sortString=='firstName'){
      return userLists.sort((a,b)=> a.firstName.localeCompare(b.firstName));
    }else if(sortString=='lastName'){
      return userLists.sort((a,b)=> a.lastName.localeCompare(b.lastName));
    }else if(sortString=='empId'){
      return userLists.sort((a,b)=> a.empId.localeCompare(b.empId));
    }else{
      return userLists;
    }
    
  }

}
