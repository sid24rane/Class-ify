import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { LoginLogoutService } from '../../services/login-logout.service';
@Component({
  selector: 'app-contact-director',
  templateUrl: './contact-director.component.html',
  styleUrls: ['./contact-director.component.css'],
  providers:[UserService, LoginLogoutService]
})

export class ContactDirectorComponent implements OnInit {

  users: User[] = [];

   constructor(private userService: UserService, private loginLogoutService: LoginLogoutService) { }

   ngOnInit() {
       // get users from secure api end point
       this.userService.getDirector()
           .subscribe(users => {
               this.users = users;
           });
   }
}
