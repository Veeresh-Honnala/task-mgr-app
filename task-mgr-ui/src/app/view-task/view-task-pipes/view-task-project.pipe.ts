import { Pipe, PipeTransform } from '@angular/core';
import { TaskModel } from 'src/app/shared/model/task.model';

@Pipe({
  name: 'viewTaskPipe'
})
export class ViewTaskProjectPipe implements PipeTransform {

  transform(taskLists: TaskModel[], term?: any): any {
    if (term && taskLists.length>0) {
      // console.log('ViewTaskProjectPipe -> ',term,taskLists)
      switch (term )  {
        case 'priority':
          return taskLists.sort((a,b)=>parseInt(a.priority)-parseInt(b.priority));
          break;
        case 'startDate':
      
          return taskLists.sort((a, b) => a.startDate>b.startDate ? -1 : a.startDate<b.startDate ? 1 : 0);
        case 'endDate':
          return taskLists.sort((a, b) => a.endDate>b.endDate ? -1 : a.endDate<b.endDate ? 1 : 0).reverse();
          break;
        case 'completed':
          return taskLists.sort((a, b) => a.editEnabled.localeCompare(b.editEnabled));
          break;
        default: 
           console.log('term --->',term)
           return taskLists.filter(t => t.project.project.startsWith(term));
           
      }
    } else {
      return taskLists;
    }
  }

}
