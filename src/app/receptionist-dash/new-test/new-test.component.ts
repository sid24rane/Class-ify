import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {Subject} from '../../models/subject';
import {Topic} from '../../models/subtopics';
import { PollService } from '../../services/poll.service';


@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.css'],
  providers:[PollService]
})

export class NewTestComponent implements OnInit {

subjects : Subject[] =[];
   topics : Topic[] =[];

  constructor(private router: Router,
      private http: Http,private pollService: PollService) {
  }

  ngOnInit(){
    this.pollService.getSubjects()
        .subscribe(
              subjects => {
                this.subjects=subjects;
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

  newTest(data:any): Observable<boolean> {
      // add authorization header with jwt token
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('http://127.0.0.1:5000/api/v1/test/create',JSON.stringify(data),options)
          .map((response: Response) => response.json());
  }

  newTestData(data:any,e:Event){
    e.preventDefault();
    delete data.subject;
    this.newTest(data)
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
