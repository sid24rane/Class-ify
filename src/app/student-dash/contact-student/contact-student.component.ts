import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { LoginLogoutService } from '../../services/login-logout.service';

@Component({
  selector: 'app-contact-student',
  templateUrl: './contact-student.component.html',
  styleUrls: ['./contact-student.component.css'],
  providers:[UserService,LoginLogoutService]
})
export class ContactStudentComponent implements OnInit {

  users: User[] = [];

   constructor(private userService: UserService,private loginLogoutService: LoginLogoutService) { }

   ngOnInit() {
       // get users from secure api end point
       this.userService.getStudent()
           .subscribe(users => {
               this.users = users;
           });
   }
}
