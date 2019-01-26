import { HttpHeaders } from '@angular/common/http';

export class TaskManagerConstants{
    public static RUN_WITH_MOCK:boolean =true;
    public static GET_USERS_MOCK:string='../../../assets/user-mock.json';
    public static GET_USERS:string='/api/taskmanager/getUsers';
    public static SEARCH_USERS:string='/api/taskmanager/searchUsers';
    public static GET_USER:string='/api/taskmanager/getUser';
    public static SAVE_USER:string='/api/taskmanager/saveOrUpdateUser';

    public static GET_PROJECTS_MOCK:string='../../../assets/project-mock.json';
    public static SAVE_PROJECT:string='/api/taskmanager/saveOrUpdateProject';
    public static GET_PROJECTS:string='/api/taskmanager/getProjects';
    public static SEARCH_PROJECT:string='/api/taskmanager/searchProjects';

    public static SEARCH_PARENT_TASK:string='/api/taskmanager/searchParentTasks';
    public static SEARCH_PARENT_TASK_MOCK:string='../../../assets/parent-task-mock.json';

    
    public static GET_PROJECT:string='/api/taskmanager/getProject';
    


    public static httpOptions():any{
        let headers= new HttpHeaders({ 'Content-Type': 'application/json' });
        let httpOptions = {
            'headers':headers
        }
        return httpOptions;
    }
}