import { Component, OnInit } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }
  user:User= new User('','','');

  ngOnInit() {
  }

  resetUser(){
    this.user= new User('','','');
  }
}
