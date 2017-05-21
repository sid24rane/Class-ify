import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {Subject} from '../../models/subject';
import {Topic} from '../../models/subtopics';
import {User} from '../../models/user'; 
import {PollService } from '../../services/poll.service';
import {UserService} from '../../services/user.service';
import { LoginLogoutService } from '../../services/login-logout.service';

@Component({
  selector: 'app-update-lecture',
  templateUrl: './update-lecture.component.html',
  styleUrls: ['./update-lecture.component.css'],
  providers:[PollService,UserService,LoginLogoutService]
})

export class UpdateLectureComponent implements OnInit {

   subjects : Subject[] =[];
   topics : Topic[] =[];
   users:User[] = [];

  constructor(private router: Router,private loginLogoutService:LoginLogoutService,
      private http: Http,private pollService:PollService,private userService:UserService) {
  }

  ngOnInit(){

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

  loadTopics(val){
          let obj = {'subject_id':val};
          this.pollService.getTopics(obj)
          .subscribe(topics=>{
            this.topics=topics;
          });
  }

  updateLecture(data:any): Observable<boolean> {
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('http://127.0.0.1:5000/api/v1/lecture/create',JSON.stringify(data),options)
          .map((response: Response) => {
            let res = response.json()
            let result = res.Result;
                if (result==='Success') {
                    return true;
                } else {
                    return false;
                }
          });
  }

  updateLectureData(data:any,e:Event){
    e.preventDefault();
    delete data.subject;
    this.updateLecture(data)
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
