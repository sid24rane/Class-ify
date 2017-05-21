import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../../ui-init.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LoginLogoutService } from '../../services/login-logout.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-give-suggestion',
  templateUrl: './give-suggestion.component.html',
  styleUrls: ['./give-suggestion.component.css'],
  providers:[ UiInitService,UserService,LoginLogoutService]
})

export class GiveSuggestionComponent implements OnInit {
  users: User[] = [];

  constructor(private UiInitService:UiInitService,
  private http: Http,private userService: UserService,private loginLogoutService:LoginLogoutService) { }

  ngOnInit() {
      this.UiInitService.setup();
      // get users from secure api end point
       this.userService.getStudent()
           .subscribe(users => {
               this.users = users;
           });
  }

  giveSuggestion(data:any):Observable<boolean>{
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('http://127.0.0.1:5000/api/v1/suggestions/create', JSON.stringify(data),options)
          .map((response: Response) => response.json());
  }

  giveSuggestionData(data:any,e:Event){
    e.preventDefault();
    this.giveSuggestion(data)
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
