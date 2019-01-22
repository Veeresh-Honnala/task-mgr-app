import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/model/user.model';
import { UserService } from '../shared/services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: UserModel = new UserModel();
  users: UserModel[];

  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.userService.getUsers().subscribe(res =>
      this.users = res.outData
    );
  }

  public updateUser(i){
    this.user = this.users[i];
  }
  resetUser() {
    this.user = new UserModel('', '', '');
  }
}
