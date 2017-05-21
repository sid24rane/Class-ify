import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from '../services/login-logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginLogoutService]
})

export class LoginComponent implements OnInit {
      loading = false;
      error = '';

  constructor(private router: Router,
        private loginLogoutService: LoginLogoutService) { }

        ngOnInit() {
              
          }

  logindata(data:any,e:Event){
    e.preventDefault();
    this.loading=true;
    this.loginLogoutService.login(JSON.stringify(data))
        .subscribe(result => {
            if (result === true) {
                let usertype = JSON.parse(localStorage.getItem("currentUser")).usertype;
                if(usertype === 'Student'){
                  this.router.navigate(['/student-dash'])
                }else if (usertype === 'Director'){
                  this.router.navigate(['/director-dash'])
                }else if (usertype === 'Teacher'){
                  this.router.navigate(['/teacher-dash'])
                }else{
                  this.router.navigate(['/receptionist-dash'])
                }
            } else {
                this.router.navigate(['/login'])
                // login failed
                this.error = 'Email or password is incorrect';
                this.loading = false;
              }});
  }


}
