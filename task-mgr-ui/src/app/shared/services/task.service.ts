import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TaskManagerConstants } from '../constants/taskmanager.constants';
import { ResponseModel } from '../model/response.model';
import { ParentTaskModel } from '../model/parent-task.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private  httpClient:HttpClient) { }


  public searchParentTasks(term: string): Observable<any> {
    console.log('term => ' + term)
    if (term === '') {
      return of([]);
    }
    if (TaskManagerConstants.RUN_WITH_MOCK == true) {
      return this.httpClient.get(TaskManagerConstants.SEARCH_PARENT_TASK_MOCK).pipe(
        map((res: ResponseModel<ParentTaskModel[]>) => {
          return res.outData.map(u => u['parentTask'] + '-'+u['parentId']);
        }));
    } else {
      // TaskManagerConstants.SEARCH_USERS
      return null;
    }
  }
}
