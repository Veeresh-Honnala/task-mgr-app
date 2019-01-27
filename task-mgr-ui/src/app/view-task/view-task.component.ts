import { Component, OnInit, TemplateRef } from '@angular/core';
import { TaskModel } from '../shared/model/task.model';
import { TaskService } from '../shared/services/task.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap, debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { ProjectService } from '../shared/services/project.service';
import { UserService } from '../shared/services/user.service';
import { ProjectModel } from '../shared/model/project.model';
import { ResponseModel } from '../shared/model/response.model';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {
  project:ProjectModel;
  termSort:string='';
  taskList:TaskModel[]=[];
  index:number;
  searching = false;
  searchFailed = false;
  disableForParent:false;
  // modalRef: BsModalRef;
  constructor(private taskService:TaskService,
    private projectService:ProjectService,private userService:UserService,
    private ngbService:NgbModal) { 
      this.project= new ProjectModel();
      this.project.project='';
    }

  ngOnInit() {
    this.taskService.getTasks().subscribe(res => {
      this.taskList = res.outData;
      // console.log(this.taskList);
    });
  }

  public sortTasks(val:string){
   this.termSort=val;
  }
  public openUpdateTaskModal(template, i) {
    this.index = i;
    this.taskList[this.index].user.fullName=this.taskList[this.index].user.firstName+" "+this.taskList[this.index].user.lastName;
    this.ngbService.open(template, { size: 'lg' });
  }

  public getTasksByProject(){
    this.taskService.getTasksByProject(this.project).subscribe(
      (res)=>{
          this.taskList= res.outData;
      }
    );
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

}
