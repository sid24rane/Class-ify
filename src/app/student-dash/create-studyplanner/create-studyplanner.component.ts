import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-studyplanner',
  templateUrl: './create-studyplanner.component.html',
  styleUrls: ['./create-studyplanner.component.css']
})
export class CreateStudyplannerComponent implements OnInit {

  constructor(private router: Router,
      private http: Http) {
  }

  ngOnInit(){}

  newPlan(data:any): Observable<boolean> {
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('/api/v1/studyplanner/create',JSON.stringify(data),options)
          .map((response: Response) => response.json());
  }

  newPlanData(data:any,e:Event){
    e.preventDefault();
    this.newPlan(data);
  }

}
