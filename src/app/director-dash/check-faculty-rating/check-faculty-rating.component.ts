import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { LoginLogoutService } from '../../services/login-logout.service';
import {UiInitService} from '../../ui-init.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Faculty } from '../../models/faculty';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-check-faculty-rating',
  templateUrl: './check-faculty-rating.component.html',
  styleUrls: ['./check-faculty-rating.component.css'],
  providers:[UserService,LoginLogoutService]
})

export class CheckFacultyRatingComponent implements OnInit {

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

    ngOnInit() {
        this.getFacultyRating()
        .subscribe(
          faculties => {
            this.faculties=faculties;
          }
        );
    }

}
