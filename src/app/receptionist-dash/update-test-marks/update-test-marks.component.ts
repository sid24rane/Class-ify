import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-update-test-marks',
  templateUrl: './update-test-marks.component.html',
  styleUrls: ['./update-test-marks.component.css'],
  providers:[UserService]
})
export class UpdateTestMarksComponent implements OnInit {

  users: User[] = [];

   constructor(private userService: UserService) { }

   ngOnInit() {
       // get users from secure api end point
       this.userService.getStudent()
           .subscribe(users => {
               this.users = users;
           });
   }

}
