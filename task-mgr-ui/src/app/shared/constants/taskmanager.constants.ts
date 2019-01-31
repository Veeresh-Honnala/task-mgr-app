import { HttpHeaders } from '@angular/common/http';

export class TaskManagerConstants{
    public static RUN_WITH_MOCK:boolean =false;

    public static GET_USERS_MOCK:string='../../../assets/user-mock.json';
    public static GET_USERS:string='/api/projectmanager/getUsers';
    public static SEARCH_USERS:string='/api/projectmanager/searchUsers';
    public static GET_USER:string='/api/projectmanager/getUser';
    public static SAVE_USER:string='/api/projectmanager/saveOrUpdateUser';

    public static GET_PROJECTS_MOCK:string='../../../assets/project-mock.json';
    public static SAVE_PROJECT:string='/api/projectmanager/saveOrUpdateProject';
    public static GET_PROJECTS:string='/api/projectmanager/getProjects';
    public static SEARCH_PROJECT:string='/api/projectmanager/searchProjects';

    
    public static SEARCH_PARENT_TASK_MOCK:string='../../../assets/parent-task-mock.json';
    public static GET_TASKS_MOCK:string= '../../assets/task-mock.json';
    public static SEARCH_PARENT_TASK:string='/api/projectmanager/searchParentTasks';
    public static SAVE_TASK:string='/api/projectmanager/saveTask';
    public static GET_TASKS:string='/api/projectmanager/getTasks';

    
    public static GET_PROJECT:string='/api/projectmanager/getProject';
    


    public static httpOptions():any{
        let headers= new HttpHeaders({ 'Content-Type': 'application/json' });
        let httpOptions = {
            'headers':headers
        }
        return httpOptions;
    }
}