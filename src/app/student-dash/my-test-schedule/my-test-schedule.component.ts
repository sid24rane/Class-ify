import { Component, OnInit } from '@angular/core';
import {UiInitService} from '../../ui-init.service';
import { LoginLogoutService } from '../../services/login-logout.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TestSchedules } from '../../models/testschedules';

@Component({
  selector: 'app-my-test-schedule',
  templateUrl: './my-test-schedule.component.html',
  styleUrls: ['./my-test-schedule.component.css'],
  providers:[UiInitService,LoginLogoutService]
})

export class MyTestScheduleComponent implements OnInit {

	testschedules: TestSchedules[] = [];

  constructor(private UiInitService:UiInitService,
  private http:Http,
  private loginLogoutService: LoginLogoutService) { }

  ngOnInit() {
  	 this.UiInitService.setup();
      this.getTestSchedule()
        .subscribe(
          testschedules => {
            this.testschedules=testschedules;
          }
        );
  }

  getTestSchedule(): Observable<TestSchedules[]> {
    let token = JSON.parse(localStorage.getItem("currentUser")).token;
    let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers });

  // get users from api
  return this.http.get('http://127.0.0.1:5000/api/v1/test/schedule', options)
      .map((response: Response) => response.json().schedules);
   }

}
