import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {path:'',redirectTo:'/user',pathMatch:'full'},
  {path:'user',component:UserComponent},
  {path:'project',component:ProjectComponent},
  {path:'addTask',component:AddTaskComponent},
  {path:'viewTask',component:ViewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
