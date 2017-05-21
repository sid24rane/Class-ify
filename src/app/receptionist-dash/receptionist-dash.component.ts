import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import {NoticeComponent} from './notice/notice.component';
import { UiInitService } from '../ui-init.service';
import { ActivatedRoute } from '@angular/router';
import {LoginLogoutService} from '../services/login-logout.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-receptionist-dash',
  templateUrl: './receptionist-dash.component.html',
  styleUrls: ['./receptionist-dash.component.css','../../css/bootstrap.min.css','../../font-awesome/css/font-awesome.css',
  '../../css/plugins/toastr/toastr.min.css'
,'../../css/animate.css','../../css/style.css'],
  providers:[ UiInitService ,LoginLogoutService]

})

export class ReceptionistDashComponent implements OnInit{

  clicked:any;
  name:string;
  
  constructor(private router:Router,private UiInitService:UiInitService,private loginLogoutService:LoginLogoutService) { }

  ngOnInit() {
      this.UiInitService.setup();
      this.name = JSON.parse(localStorage.getItem("currentUser")).name;
  }

  onClick(clicked:string){
    this.clicked = clicked.split('/');
  }

  
  logoutme(e:Event){
    this.loginLogoutService.logout();
    this.router.navigate(['']);
  }

}
