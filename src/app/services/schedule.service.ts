import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Schedule } from '../models/schedule';

@Injectable()
export class ScheduleService {

  constructor(private http: Http) {}

  getSchedule(): Observable<Schedule[]> {
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.get('http://127.0.0.1:5000/api/v1/student/schedule', options)
          .map((response: Response) => response.json().lectures);
  }
}
