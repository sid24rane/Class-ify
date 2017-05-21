import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginLogoutService } from '../../services/login-logout.service';
import { StudyPlanner } from '../../models/studyplanner';

@Component({
  selector: 'app-view-studyplanner',
  templateUrl: './view-studyplanner.component.html',
  styleUrls: ['./view-studyplanner.component.css'],
  providers:[LoginLogoutService]
})
export class ViewStudyplannerComponent implements OnInit {

studyplanners:StudyPlanner[] =[];
  constructor(private http:Http,
  private loginLogoutService: LoginLogoutService) { }


  ngOnInit() {
    this.getPlanner();
  }

          getPlanner(): Observable<StudyPlanner[]> {
          // add authorization header with jwt token
          let headers = new Headers({ 'Authorization': 'Bearer ' + this.loginLogoutService.token });
          let options = new RequestOptions({ headers: headers });

          // get users from api
          return this.http.get('/api/v1/studyplanner/view', options)
              .map((response: Response) => response.json());
      }

}
