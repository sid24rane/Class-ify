import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LoginLogoutService } from '../../services/login-logout.service';
import {Subject} from '../../models/subject';
import {User} from '../../models/user'; 
import {PollService } from '../../services/poll.service';

@Component({
  selector: 'app-create-faculty-rating',
  templateUrl: './create-faculty-rating.component.html',
  styleUrls: ['./create-faculty-rating.component.css'],
  providers:[UserService,LoginLogoutService,PollService]

})

export class CreateFacultyRatingComponent implements OnInit {

  subjects : Subject[] =[];
  users:User[] = [];

  constructor(private http: Http,private pollService:PollService,private loginLogoutService:LoginLogoutService,private userService:UserService) { }

  ngOnInit() {

    this.pollService.getSubjects()
        .subscribe(
              subjects => {
                this.subjects=subjects;
              }
        );

        this.userService.getTeacher()
        .subscribe(
              users => {
                this.users=users;
              }
        );
  }

  createFacultyRating(data:any):Observable<boolean>{
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('http://127.0.0.1:5000/api/v1/faculty/rating/create', JSON.stringify(data),options)
          .map((response: Response) => response.json());
  }

  createFacultyRatingData(data:any,e:Event){
    data.rating=0;
    data.count=0;
    e.preventDefault();
    this.createFacultyRating(data)
    .subscribe(
      result => {
          if (result === true) {
              // login successful

          } else {
              // login failed
      }}
    );

}
}
