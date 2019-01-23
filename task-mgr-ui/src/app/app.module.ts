import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

//services
import { UserService } from './shared/services/user.service';
import { SortPipe } from './user/user-pipes/sort.pipe';
import { UserSerachPipe } from './user/user-pipes/user-serach.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SortPipe,
    UserSerachPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
