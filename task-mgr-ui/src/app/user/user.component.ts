import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/model/user.model';
import { UserService } from '../shared/services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private isAddButton:boolean=true;
  filterUser:string; 
  sortFieldName:string='firstName'; 

  constructor(private userService: UserService) { }
  user: UserModel = new UserModel();
  users: UserModel[]=[];

  ngOnInit() {
    this.getUsers();
  }

  public saveUser(){
    this.userService.saveOrUpdateUser(this.user).subscribe(
        (res)=>{
          if(res.outData.status==='Success')
          this.users.push(this.user);
        },
        (err)=>{
          //need open popup to show un-success message
        }
    );
  }

  public updateUser(){
    this.userService.saveOrUpdateUser(this.user).subscribe(
      res=>{
        this.isAddButton=false;
      },
      (err)=>{
        //need open popup to show un-success message
      }
   );
  }

  public getUsers() {
    this.userService.getUsers().subscribe(res =>
      this.users = res.outData
    );
  }

  public loadUser(i){
    // this.user =  new UserModel(this.users[i].firstName, this.users[i].lastName, this.users[i].empId,this.users[i].userId);
    this.user = this.users[i];
    this.isAddButton=false;
  }

  resetUser() {
    this.user = new UserModel('', '', '');
  }

  sortUser(sort){
    this.sortFieldName=sort;
    console.log(this.sortFieldName);
  }
}
