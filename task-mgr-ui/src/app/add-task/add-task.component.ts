import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../shared/model/task.model';
import { ProjectService } from '../shared/services/project.service';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { ProjectModel } from '../shared/model/project.model';
import { ParentTaskModel } from '../shared/model/parent-task.model';
import { UserService } from '../shared/services/user.service';
import { TaskService } from '../shared/services/task.service';
import { UserModel } from '../shared/model/user.model';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  task: TaskModel;
  searching = false;
  searchFailed = false;
  disableForParent=false;

  constructor(private projectService:ProjectService,private userService:UserService,
    private taskService:TaskService) { 
    this.task=new TaskModel();
    this.task.priority='0';
    this.task.isParent=false;
    this.task.parentTask= new ParentTaskModel();
    this.task.user= new UserModel();
    this.task.project= new ProjectModel();
  }

  ngOnInit() {
  }

  public saveOrUpdateTask(){
    this.taskService.saveOrUpdateTask(this.task).subscribe(
      (res)=>{
        console.log(res);
      }
    )
  }
  searchProjects = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.projectService.searchProjects(term).pipe(
          tap((rt) => { this.searchFailed = false;
            return rt;
          }),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

    searchUsers = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.userService.searchUsers(term).pipe(
          tap((rt) => { this.searchFailed = false;
            return rt;
          }),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

    searchParentTasks = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.taskService.searchParentTasks(term).pipe(
          tap((rt) => { this.searchFailed = false;
            return rt;
          }),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

    public disableParent(){
      this.disableForParent=!this.disableForParent;
    }

}
