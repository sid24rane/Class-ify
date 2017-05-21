import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../../ui-init.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sharenotes',
  templateUrl: './sharenotes.component.html',
  styleUrls: ['./sharenotes.component.css'],
    providers:[ UiInitService ]
})

export class SharenotesComponent implements OnInit {

  constructor(private UiInitService:UiInitService,
  private http: Http) { }


  ngOnInit() {
      this.UiInitService.setup();
  }


  shareNotes(data:any):Observable<boolean>{

      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});  
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('http://127.0.0.1:5000/api/v1/faculty/sharenotes/create', JSON.stringify(data),options)
          .map((response: Response) => response.json());
  }

  shareNotesData(data:any,e:Event){
    e.preventDefault();
    this.shareNotes(data)
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
