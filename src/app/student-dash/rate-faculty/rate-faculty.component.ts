import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Faculty } from '../../models/faculty';

@Component({
  selector: 'app-rate-faculty',
  templateUrl: './rate-faculty.component.html',
  styleUrls: ['./rate-faculty.component.css']
})

export class RateFacultyComponent implements OnInit {

  faculties : Faculty[] =[];

    constructor (private router: Router,
    private http:Http) { }

 getFacultyRating(): Observable<Faculty[]> {
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://127.0.0.1:5000/api/v1/faculty/rating', options)
            .map((response: Response) => response.json().faculties);
   }

rateTeacher(data:any): Observable<boolean> {
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('http://127.0.0.1:5000/api/v1/rate/teacher',JSON.stringify(data),options)
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

  ngOnInit() {
  	 this.getFacultyRating()
        .subscribe(
          faculties => {
            this.faculties=faculties; 
          }
        );
  }

  ratingData(rating:any,e:Event){
  	e.preventDefault();
  	let name = e.srcElement.id;
  	let obj = {'name':name,'rating':rating}
  	 this.rateTeacher(obj)
        .subscribe(result => {
          if (result === true) {
              // login successful

          } else {
              // login failed
      }}
    );
  }


  

}
