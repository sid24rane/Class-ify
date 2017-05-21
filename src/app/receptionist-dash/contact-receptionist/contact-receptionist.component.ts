import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { LoginLogoutService } from '../../services/login-logout.service';

@Component({
  selector: 'app-contact-receptionist',
  templateUrl: './contact-receptionist.component.html',
  styleUrls: ['./contact-receptionist.component.css'],
  providers:[UserService,LoginLogoutService]
})

export class ContactReceptionistComponent implements OnInit {

  users: User[] = [];

   constructor(private userService: UserService,private loginLogoutService: LoginLogoutService) { }

   ngOnInit() {
       // get users from secure api end point
       this.userService.getReceptionist()
           .subscribe(users => {
               this.users = users;
           });
   }
}
