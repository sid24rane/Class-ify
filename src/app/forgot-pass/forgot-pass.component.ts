import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from '../services/login-logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css'],
  providers:[LoginLogoutService]
})
export class ForgotPassComponent implements OnInit {

  loading = false;
  error = '';

constructor(private router: Router,
    private loginLogoutService: LoginLogoutService) { }

    ngOnInit() {}

  forgotData(data:any,e:Event){
    e.preventDefault();
    this.loginLogoutService.forgotPassword(JSON.stringify(data))
        .subscribe(result => {
            if (result === true) {
                this.router.navigate(['/']);
            } else {
                // login failed
                this.error = 'Invalid Email Address!';
                this.loading = false;
              }});

  }

}
