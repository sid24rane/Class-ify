import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { LoginLogoutService } from './login-logout.service';
import { User } from '../models/user';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private loginLogoutService: LoginLogoutService) {
    }


    getUnverifiedStudent(): Observable<User[]> {
          // add authorization header with jwt token
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://127.0.0.1:5000/api/v1/contact/students/verify', options)
            .map((response: Response) => response.json().students);
    }
 
    getStudent(): Observable<User[]> {
          // add authorization header with jwt token
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://127.0.0.1:5000/api/v1/contact/students', options)
            .map((response: Response) => response.json().students);
    }

    getDirector(): Observable<User[]> {
          // add authorization header with jwt token
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://127.0.0.1:5000/api/v1/contact/directors', options)
            .map((response: Response) => response.json().directors);
    }
    getTeacher(): Observable<User[]> {
          // add authorization header with jwt token
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://127.0.0.1:5000/api/v1/contact/teachers', options)
            .map((response: Response) => response.json().teachers);
    }
    getReceptionist(): Observable<User[]> {  
        // add authorization header with jwt token
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://127.0.0.1:5000/api/v1/contact/receptionists', options)
            .map((response: Response) => response.json().receptionists);
    }

 getTeacherAndReceptionist(): Observable<User[]> {  
        // add authorization header with jwt token
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://127.0.0.1:5000/api/v1/contact/teacher_receptionists', options)
            .map((response: Response) => response.json().teacher_receptionist);
    }

}
