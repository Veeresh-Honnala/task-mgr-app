import { HttpHeaders } from '@angular/common/http';

export class TaskManagerConstants{
    public static RUN_WITH_MOCK:boolean =true;
    public static GET_USERS_MOCK:string='../../../assets/user-mock.json';
    public static GET_USERS:string='/api/taskmanager/getUsers';
    public static GET_USER:string='/api/taskmanager/getUser';
    public static SAVE_USER:string='/api/taskmanager/saveOrUpdateUser';
    public static httpOptions():any{
        let headers= new HttpHeaders({ 'Content-Type': 'application/json' });
        let httpOptions = {
            'headers':headers
        }
        
        return httpOptions;
    }
}