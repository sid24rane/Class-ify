import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable()
export class ToDoService {

  constructor(private http: Http) {
  }

  getTodo(): Observable<Todo[]> {
      // add authorization header with jwt token
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.get('http://127.0.0.1:5000/api/v1/todo', options)
          .map((response: Response) => response.json().todos);
  }

  updateTodo(data:any):Observable<boolean>{
      // add authorization header with jwt token
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.put('http://127.0.0.1:5000/api/v1/todo', JSON.stringify(data),options)
          .map((response: Response) =>{
             let res = response.json();
             let result = res.Result;
                if (result==='Success') {
                    return true;
                } else {
                    return false;
                }
          });
}

addTodo(data:any):Observable<boolean>{
    // add authorization header with jwt token
    data.isDone=false;
    let token = JSON.parse(localStorage.getItem("currentUser")).token;
    let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.post('http://127.0.0.1:5000/api/v1/todo', JSON.stringify(data),options)
        .map((response: Response) =>{
             let res = response.json();
             let result = res.Result;
                if (res==='Success') {
                    return true;
                } else {
                    return false;
                }
          });
}

deleteTodo(data:any):Observable<boolean>{
    // add authorization header with jwt token
    let token = JSON.parse(localStorage.getItem("currentUser")).token;
    let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers, body:JSON.stringify(data) });

    // get users from api
    return this.http.delete('http://127.0.0.1:5000/api/v1/todo',options)
       .map((response: Response) =>{
             let res = response.json();
             let result = res.Result;
                if (res==='Success') {
                    return true;
                } else {
                    return false;
                }
          });
}
}
