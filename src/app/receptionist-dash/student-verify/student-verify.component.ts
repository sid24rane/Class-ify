import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { LoginLogoutService } from '../../services/login-logout.service';

@Component({
  selector: 'app-student-verify',
  templateUrl: './student-verify.component.html',
  styleUrls: ['./student-verify.component.css'],
  providers:[UserService,LoginLogoutService]
})
export class StudentVerifyComponent implements OnInit {

  users: User[] = [];

   constructor(private http:Http,private userService: UserService,private loginLogoutService:LoginLogoutService) { }

   ngOnInit() {
       // get users from secure api end point
       this.userService.getUnverifiedStudent()
           .subscribe(users => {
               this.users = users;
           });
   }

 verifyStudent(data:any): Observable<boolean> {
      let token = JSON.parse(localStorage.getItem("currentUser")).token;
      let headers = new Headers({ 'Authorization': 'Bearer ' + token,'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('http://127.0.0.1:5000/api/v1/verify/student',JSON.stringify(data),options)
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
   verify(e:Event){
       let id = e.srcElement.id;
       e.preventDefault();
       let obj = {'user_id':id};
       this.verifyStudent(obj)
        .subscribe(result => {
          if (result === true) {
              // login successful

          } else {
              // login failed
      }}
    );
   }

}
