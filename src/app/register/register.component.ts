import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from '../services/login-logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[LoginLogoutService]
})
export class RegisterComponent implements OnInit {

  loading = false;
  error = '';

constructor(private router: Router,
    private loginLogoutService: LoginLogoutService) { }

    ngOnInit() {}

  registerData(data:any,e:Event){
    e.preventDefault();
    data.isEmailVerified=false;
    data.isVerified=false;
    this.loading=true;
    this.loginLogoutService.register(JSON.stringify(data))
        .subscribe(result => {
            if (result === true) {
                // login successful
                this.router.navigate(['/login']);
            } else {
                // login failed
                this.error = 'User with the given Email already exists!';
                this.loading = false;
              }});
  }
}
