
import { ParentTaskModel } from "./parent-task.model";
import { UserModel } from './user.model';
import { ProjectModel } from './project.model';
export class TaskModel{
    taskId:string;
    project:ProjectModel;
    taskName:string;
    priority:string;
    parentTask:ParentTaskModel;
    startDate:string;
    endDate:string;
    user:UserModel;
    isParent:boolean;
    editEnabled:string;
    // below fields are used for filtering data
    priorityFrom:number;
    priorityTo:number;

}