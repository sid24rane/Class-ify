import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../../ui-init.service';
declare var $:any;
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginLogoutService } from '../../services/login-logout.service';
import { PersonalNotes } from '../../models/personalnotes';

@Component({
  selector: 'app-personal-notes',
  templateUrl: './personal-notes.component.html',
  styleUrls: ['./personal-notes.component.css'],
  providers:[ UiInitService,LoginLogoutService]

})

export class PersonalNotesComponent implements OnInit {

  personalnotes:PersonalNotes[] =[];

  constructor(private UiInitService:UiInitService,
    private http:Http,
    private loginLogoutService: LoginLogoutService) { }

  ngOnInit() {

      this.UiInitService.setup();
      
      this.getPersonalNotes()
      .subscribe(personalnotes=>{
        this.personalnotes=personalnotes
      });

      $(document).ready(function () {
        $('.summernote').summernote();
      });
  }

  notedata(data:any,e:Event){
    e.preventDefault();
    this.addNote(data)
    .subscribe(result=>{
      if(result === true){
          // success
      }else{
          // fail
      }
    });

 }

  edit(e:Event){
    e.preventDefault();
    $('.click2edit').summernote({focus: true});
  }

  save(e:Event){
    e.preventDefault();
    var aHTML = $('.click2edit').code(); //save HTML If you need(aHTML: array).
    $('.click2edit').destroy();
    let notebody = $('#notedata').text();
    console.log(notebody);
    let obj = {'body':notebody};
    this.notedata(obj,e);
  }

  // save(data:any,e:Event){
  //   e.preventDefault();
  //   let noteid = e.srcElement.id;
  //   let notebody = data;
  //   let obj = {'body':notebody,'note_id':noteid};
  //   this.updateNote(obj)
  //   .subscribe(result=>{
  //     if(result === true){
  //         // success
  //     }else{
  //         // fail
  //     }
  //   });
  // }

  // updateNote(data:any): Observable<boolean> {

  //     let token = JSON.parse(localStorage.getItem("currentUser")).token;
  //     let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
  //     let options = new RequestOptions({ headers: headers });
  //     // get users from api
  //     return this.http.post('http://127.0.0.1:5000/api/v1/personalnotes/update',JSON.stringify(data),options)
  //         .map((response: Response) => response.json());
  // }


  addNote(data:any): Observable<boolean> {

      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });
      // get users from api
      return this.http.post('http://127.0.0.1:5000/api/v1/personalnotes/create',JSON.stringify(data),options)
          .map((response: Response) => response.json());
  }

  getPersonalNotes(): Observable<PersonalNotes[]> {
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'}); 
      let options = new RequestOptions({ headers: headers });

  // get users from api
  return this.http.get('http://127.0.0.1:5000/api/v1/personalnotes/view', options)
      .map((response: Response) => response.json().personal_notes);
}

}
