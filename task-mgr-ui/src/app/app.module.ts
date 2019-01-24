import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { ProjectComponent } from './project/project.component';

//services
import { UserService } from './shared/services/user.service';
import { ProjectService } from './shared/services/project.service';

//pipes
import { SortPipe } from './user/user-pipes/sort.pipe';
import { UserSerachPipe } from './user/user-pipes/user-serach.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SortPipe,
    UserSerachPipe,
    AddTaskComponent,
    ViewTaskComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService,
    ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
