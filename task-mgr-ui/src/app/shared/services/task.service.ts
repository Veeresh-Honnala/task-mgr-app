import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TaskManagerConstants } from '../constants/taskmanager.constants';
import { ResponseModel } from '../model/response.model';
import { ParentTaskModel } from '../model/parent-task.model';
import { ProjectModel } from '../model/project.model';
import { map, tap, catchError } from 'rxjs/operators';
import { TaskModel } from '../model/task.model';
import { UserService } from './user.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient, private userService: UserService) { }


  public searchParentTasks(term: string): Observable<any> {
    console.log('term => ' + term)
    if (term === '') {
      return of([]);
    }
    if (TaskManagerConstants.RUN_WITH_MOCK == true) {
      return this.httpClient.get(TaskManagerConstants.SEARCH_PARENT_TASK_MOCK).pipe(
        map((res: ResponseModel<ParentTaskModel[]>) => {
          return res.outData.map(u => u['parentTask'] + '-' + u['parentId']);
        }));
    } else {
      return this.httpClient.get(TaskManagerConstants.SEARCH_PARENT_TASK_MOCK).pipe(
        map((res: ResponseModel<ParentTaskModel[]>) => {
          return res.outData.map(u => u['parentTask'] + '-' + u['parentId']);
        }));
    }
  }

  public saveOrUpdateTask(task: TaskModel): Observable<ResponseModel<String>> {
    if (TaskManagerConstants.RUN_WITH_MOCK) {
      let res = new ResponseModel<String>();
      res.outData = 'Success';
      res.status = 'Success';
      return of(res);
    } else {
      if (task.project.project)
       task.parentTask.parentId = task.project.project.split('-')[1];

      if (task.user.fullName)
       task.user.userId= task.user.fullName.split('-')[1];

      if (task.parentTask.parentTask)
        task.parentTask.parentId = task.parentTask.parentTask.split('-')[1];
      
      return this.httpClient.post(TaskManagerConstants.SAVE_TASK, task, httpOptions).pipe(
        tap((res: ResponseModel<String>) => res),
        catchError(this.userService.handleError<ResponseModel<String>>('saveOrUpdateTask')));
    }
  }

  public getTasks(): Observable<ResponseModel<TaskModel[]>> {
    if (TaskManagerConstants.RUN_WITH_MOCK) {
      return this.httpClient.get(TaskManagerConstants.GET_TASKS_MOCK).pipe(
        tap((res: ResponseModel<TaskModel[]>) => console.log(`added task w/ id=${res.status}`)),
        catchError(this.userService.handleError<ResponseModel<TaskModel[]>>('getTasks')));
    } else {
      return this.httpClient.post<ResponseModel<TaskModel[]>>(TaskManagerConstants.GET_TASKS, httpOptions).pipe(
        tap((res: ResponseModel<TaskModel[]>) => console.log(`added task w/ id=${res.status}`)),
        catchError(this.userService.handleError<ResponseModel<TaskModel[]>>('getTasks')));
    }
  }

  public getTasksByProject(project:ProjectModel): Observable<ResponseModel<TaskModel[]>> {
    let pr=project.project.split('-');
    project.project=pr[0];
    project.projectId=parseInt(pr[1]);

    if (TaskManagerConstants.RUN_WITH_MOCK) {
      return this.httpClient.get(TaskManagerConstants.GET_TASKS_MOCK).pipe(
        tap((res: ResponseModel<TaskModel[]>) => console.log(`added task w/ id=${res.status}`)),
        catchError(this.userService.handleError<ResponseModel<TaskModel[]>>('getTasks')));
    } else {
      return this.httpClient.post<ResponseModel<TaskModel[]>>(TaskManagerConstants.GET_TASKS,project, httpOptions).pipe(
        tap((res: ResponseModel<TaskModel[]>) => console.log(`added task w/ id=${res.status}`)),
        catchError(this.userService.handleError<ResponseModel<TaskModel[]>>('getTasks')));
    }
  }
}
