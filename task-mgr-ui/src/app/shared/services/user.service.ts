import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subscriber } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UserModel } from '../model/user.model';
import { ResponseModel } from '../model/response.model';
import { TaskManagerConstants } from '../constants/taskmanager.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient:HttpClient) { }

  public getUsers():Observable<any>{
    if(TaskManagerConstants.RUN_WITH_MOCK=true){
        return this.httpClient.get(TaskManagerConstants.GET_USERS_MOCK).pipe(
          tap((res:ResponseModel<UserModel>)=>console.log(`get users w/ id=${res.status}`)),
          catchError(this.handleError<UserModel>('getUsers')));
    }else{
      return null;
    }  
  }

  public saveOrUpdateUser(user:UserModel):any{
    if(TaskManagerConstants.RUN_WITH_MOCK=true){
      let res = new ResponseModel<string>();
      res.errCode = '0';
      res.outData = 'Success';
      res.status = 'Success';
      return new Observable<ResponseModel<string>>((subscriber: Subscriber<ResponseModel<string>>) => subscriber.next(res));
    }else{
      return this.httpClient.post<ResponseModel<string>>(TaskManagerConstants.SAVE_USER,user,httpOptions).pipe(
        tap((res:ResponseModel<string>)=>console.log('---')),
        catchError(this.handleError<UserModel>('saveOrUpdateUser')));
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
