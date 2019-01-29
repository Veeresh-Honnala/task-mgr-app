import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../shared/model/project.model';
import { ProjectService } from '../shared/services/project.service';
import { debounceTime, distinctUntilChanged, switchMap, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projectModels: ProjectModel[] = [];
  updateProj:boolean=false;
  projectModel: ProjectModel = new ProjectModel();
  searching = false;
  searchFailed = false;
  constructor(private projectService: ProjectService, private userService: UserService) {
    this.projectModel.hasDates = false;
    this.projectModel.priority=0;
    this.projectModel.manager = '';
  }


  ngOnInit() {
    this.getProjects();
  }

  public disableDates() {
    this.projectModel.startDate = null;
    this.projectModel.endDate = null;
    this.projectModel.hasDates = !this.projectModel.hasDates;
  }
  

  searchUsers = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.userService.searchUsers(term).pipe(
          tap((rt) => {
            this.searchFailed = false;
            return rt;
          }),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );


  public getProjects() {
    this.projectService.getProjects().subscribe(
      (res) => {
        this.projectModels = res;
      }
    )
  }

  public saveProject() {
    this.projectService.saveOrUpdateProject(this.projectModel).subscribe(
      (res) => {
        console.log('--');
      }
    );
  }
  public suspendProject(i: number) {
    this.projectModels[i].suspended = 'Y';
    this.projectService.saveOrUpdateProject(this.projectModel[i]).subscribe(
      (res) => {
        console.log('--');
      }
    );
  }

  public updateProject(i: number) {
    this.updateProj=true;
    this.projectModel = this.projectModels[i];
  }
  public update() {
    this.projectService.saveOrUpdateProject(this.projectModel).subscribe(
      (res) => {
        console.log('--');
      }
    )

  }
}
