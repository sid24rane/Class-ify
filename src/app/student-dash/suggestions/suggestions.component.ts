import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../../ui-init.service';
import {Suggestion} from '../../models/Suggestion';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css'],
  providers:[ UiInitService ]
})

export class SuggestionsComponent implements OnInit {
 suggestions : Suggestion[] =[];

  constructor(private UiInitService:UiInitService,private router:Router,private http:Http) { }

  ngOnInit() {
      this.UiInitService.setup();
      this.getSuggestions()
      .subscribe(results=>{
      	this.suggestions=results
      });
  }

  getSuggestions(): Observable<Suggestion[]> {
    let token = JSON.parse(localStorage.getItem("currentUser")).token;
    let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers });

  // get users from api
  return this.http.get('http://127.0.0.1:5000/api/v1/suggestions', options)
      .map((response: Response) => response.json().suggestions);
}

}
