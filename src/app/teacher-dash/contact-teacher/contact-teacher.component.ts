import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { LoginLogoutService } from '../../services/login-logout.service';

@Component({
  selector: 'app-contact-teacher',
  templateUrl: './contact-teacher.component.html',
  styleUrls: ['./contact-teacher.component.css'],
  providers:[UserService,LoginLogoutService]
})

export class ContactTeacherComponent implements OnInit {

  users: User[] = [];

   constructor(private userService: UserService,private loginLogoutService: LoginLogoutService) { }

   ngOnInit() {
       // get users from secure api end point
       this.userService.getTeacher()
           .subscribe(users => {
               this.users = users;
           });
   }

}
