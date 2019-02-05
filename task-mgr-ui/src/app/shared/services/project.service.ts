import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskManagerConstants } from '../constants/taskmanager.constants';
import { ResponseModel } from '../model/response.model';
import { ProjectModel } from '../model/project.model';
import { UserService } from './user.service';

import { tap, catchError, map } from 'rxjs/operators'
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient, private userService: UserService) { }

  public searchProjects(term: string): Observable<any> {
    console.log('term => ' + term)
    if (term === '') {
      return of([]);
    }
    if (TaskManagerConstants.RUN_WITH_MOCK == true) {
      return this.httpClient.get(TaskManagerConstants.GET_PROJECTS_MOCK).pipe(
        map((res: ResponseModel<ProjectModel[]>) => {
          return res.outData.map(p => p['project'] + '-' + p['projectId']);
        })
      );
    } else {
      return null;
    }
  }

  public getProjects(): Observable<any> {
    if (TaskManagerConstants.RUN_WITH_MOCK == true) {
      return this.httpClient.get(TaskManagerConstants.GET_PROJECTS_MOCK).pipe(
        map((res: ResponseModel<ProjectModel[]>) => {
          return res.outData;
        })
      );
    } else {
      return this.httpClient.post(TaskManagerConstants.GET_PROJECTS, httpOptions).pipe(
        map((res: ResponseModel<ProjectModel[]>) => {
          return res.outData;
        })
      );
    }
  }

  public saveOrUpdateProject(projectModel: ProjectModel): Observable<any> {
    // projectModel.manager= 
    
    if (TaskManagerConstants.RUN_WITH_MOCK) {
      let res = new ResponseModel<string>();
      res.errCode = '0';
      res.outData = 'Success';
      res.status = 'Success';
      return of(res);
    } else {
      projectModel.managerId=  parseInt(projectModel.manager.split('-')[1]);
      projectModel.suspended='N';
      console.log(projectModel);
      return this.httpClient.post(TaskManagerConstants.SAVE_PROJECT, projectModel, httpOptions).pipe(
        map((res: ResponseModel<ProjectModel[]>) => {
          return res;
        })
      );
    }
  }

}
