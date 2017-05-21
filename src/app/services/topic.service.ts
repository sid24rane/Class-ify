import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Topic } from '../models/topic';


@Injectable()
export class TopicService {

  constructor(
      private http: Http) {
  }

  getUpdatedTopic(): Observable<Topic[]> {
        // add authorization header with jwt token
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.get('http://127.0.0.1:5000/api/v1/topic/status', options)
          .map((response: Response) => response.json().topics);
  }



  updateTopic(data:any):Observable<boolean>{
      // add authorization header with jwt token
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('http://127.0.0.1:5000/api/v1/topic/completed/create', JSON.stringify(data),options)
          .map((response: Response) => response.json());
}
}
