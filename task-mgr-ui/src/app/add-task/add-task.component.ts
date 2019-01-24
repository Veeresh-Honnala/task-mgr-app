import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../shared/model/task.model';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  task: TaskModel;
  constructor() { }

  ngOnInit() {
  }

}
