import { UserModel } from './user.model';

export class ProjectModel{
    constructor(
        public projectId?:number,
        public project?:string,
        public priority?:number,
        public manager?:String,
        public managerId?:number,
        public hasDates?:boolean,
        public startDate?:Date,
        public endDate?:Date,
        public suspended?:string
    ){}
}