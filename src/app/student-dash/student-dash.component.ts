import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../ui-init.service';
import {LoginLogoutService} from '../services/login-logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  styleUrls: ['./student-dash.component.css','../../css/bootstrap.min.css','../../font-awesome/css/font-awesome.css',
  '../../css/plugins/toastr/toastr.min.css'
,'../../css/animate.css','../../css/style.css'],
  providers:[ UiInitService ,LoginLogoutService]

})
export class StudentDashComponent implements OnInit {

  name : string;

  constructor(private router:Router,private UiInitService:UiInitService,private loginLogoutService:LoginLogoutService) { }

  ngOnInit() {
      this.UiInitService.setup();
      this.name = JSON.parse(localStorage.getItem("currentUser")).name;
  }

  logoutme(e:Event){
  	e.preventDefault();
  	this.loginLogoutService.logout();
  }

}
