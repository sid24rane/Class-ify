import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Poll } from '../models/poll';
import {Subject} from '../models/subject';
import {Topic} from '../models/subtopics';

@Injectable()
export class PollService {

  constructor(
      private http: Http) {
  }

  getSubjects(): Observable<Subject[]> {
      // add authorization header with jwt token
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.get('http://127.0.0.1:5000/api/v1/subjects', options)
          .map((response: Response) => response.json().subjects);
  }

getTopics(data:any): Observable<Topic[]> {
      // add authorization header with jwt token
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('http://127.0.0.1:5000/api/v1/subjects/topics', JSON.stringify(data),options)
          .map((response: Response) => response.json().topics);
  }

  getPoll(): Observable<Poll[]> {
      // add authorization header with jwt token
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.get('http://127.0.0.1:5000/api/v1/polls', options)
          .map((response: Response) => response.json().allpolls);
  }



  addPoll(data:any):Observable<boolean>{
      // add authorization header with jwt token
      data.votes = 0;
       let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('http://127.0.0.1:5000/api/v1/poll/create', JSON.stringify(data),options)
          .map((response: Response) => response.json());
  }


}
