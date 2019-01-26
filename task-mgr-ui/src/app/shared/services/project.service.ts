import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskManagerConstants } from '../constants/taskmanager.constants';
import { ResponseModel } from '../model/response.model';
import { ProjectModel } from '../model/project.model';
import { UserService } from './user.service';

import { tap, catchError, map } from 'rxjs/operators'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient, private userService: UserService) { }

  public searchProjects(term: string): Observable<any> {
    console.log('term => '+term)
    if (term === '') {
      return of([]);
    }
    if (TaskManagerConstants.RUN_WITH_MOCK == true) {
      return this.httpClient.get(TaskManagerConstants.GET_PROJECTS_MOCK).pipe(
        map((res:ResponseModel<ProjectModel[]>) => {
          return res.outData.map(p=>p['project']+'-'+p['projectId']);
        })
      );
    } else {
      return null;
    }
  }

}
