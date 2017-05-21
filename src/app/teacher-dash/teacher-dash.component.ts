import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../ui-init.service';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from "@angular/router";
import {LoginLogoutService} from '../services/login-logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-dash',
  templateUrl: './teacher-dash.component.html',
  styleUrls: ['./teacher-dash.component.css','../../css/bootstrap.min.css','../../font-awesome/css/font-awesome.css',
  '../../css/plugins/toastr/toastr.min.css'
,'../../css/animate.css','../../css/style.css'],
  providers:[ UiInitService ,LoginLogoutService]
})

export class TeacherDashComponent implements OnInit {

  constructor(private router:Router,private UiInitService:UiInitService,private loginLogoutService:LoginLogoutService) { }

  name:string;
  
  ngOnInit() {
      this.UiInitService.setup();
      this.name = JSON.parse(localStorage.getItem("currentUser")).name;
  }

    logoutme(e:Event){
  	this.loginLogoutService.logout();
  	this.router.navigate(['/']);
  }
  
}
