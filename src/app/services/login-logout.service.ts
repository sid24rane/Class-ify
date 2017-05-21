import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


@Injectable()
export class LoginLogoutService {
    public token: string;

    constructor(private http: Http,private router:Router) {
     //   var currentUser = JSON.parse(localStorage.getItem("currentUser")).token;;
       // this.token = currentUser && currentUser.token;
    }


    login(data:any): Observable<boolean> {
        console.log(data);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      return this.http.post(' http://127.0.0.1:5000/api/v1/login',data,{ 
        headers: headers 
    })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        let usertype = response.json().usertype;
        let name = response.json().name;
        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ name:name,usertype:usertype,token: token }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        this.router.navigate(['']);
    }

    register(data:any): Observable<boolean> {
        console.log(data);
        let headers = new Headers();
    headers.append('Content-Type', 'application/json');
        return this.http.post('http://127.0.0.1:5000/api/v1/register',data,{
            headers:headers
        })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let res = response.json();
                if (res) {
                    return true;
                } else {
                    return false;
                }
            });
    }

    forgotPassword(data:any): Observable<boolean> {
           console.log(data);
        let headers = new Headers();
    headers.append('Content-Type', 'application/json');
        return this.http.post('http://127.0.0.1:5000/api/v1/forgot',data,{
            headers:headers
        })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                console.log(token);
                if (token) {
                    // set token property
                    this.token = token;
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }
}
