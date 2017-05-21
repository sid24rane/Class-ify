import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginLogoutService } from '../../services/login-logout.service';
import { SharedNotes } from '../../models/sharednotes';

@Component({
  selector: 'app-shared-files',
  templateUrl: './shared-files.component.html',
  styleUrls: ['./shared-files.component.css'],
  providers:[LoginLogoutService]
})
export class SharedFilesComponent implements OnInit {

  sharednotes:SharedNotes[] =[];

    constructor(private http:Http,
    private loginLogoutService: LoginLogoutService) { }

    ngOnInit() {
      
      this.getSharedFiles()
      .subscribe(notes=>{
        this.sharednotes = notes;
      });

    }

            getSharedFiles(): Observable<SharedNotes[]> {
              // add authorization header with jwt token
            let token = JSON.parse(localStorage.getItem("currentUser")).token;
            let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
            let options = new RequestOptions({ headers: headers });

            // get users from api
            return this.http.get('http://127.0.0.1:5000/api/v1/sharednotes/view', options)
                .map((response: Response) => response.json().notes);
        }
}
