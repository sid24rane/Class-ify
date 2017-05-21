import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';
import { Router } from '@angular/router';
import {Subject} from '../../models/subject';
import {Topic} from '../../models/subtopics';
import {User} from '../../models/user'; 
import {PollService } from '../../services/poll.service';
import {UserService} from '../../services/user.service';
import { LoginLogoutService } from '../../services/login-logout.service';

@Component({
  selector: 'app-update-topic',
  templateUrl: './update-topic.component.html',
  styleUrls: ['./update-topic.component.css'],
  providers:[TopicService,PollService,UserService,LoginLogoutService]
})

export class UpdateTopicComponent implements OnInit {

   subjects : Subject[] =[];
   topics : Topic[] =[];
      users:User[] = [];


  constructor(private topicService:TopicService,private loginLogoutService:LoginLogoutService
  ,private router:Router,private pollService:PollService,private userService:UserService) { }

  ngOnInit() {
      this.pollService.getSubjects()
        .subscribe(
              subjects => {
                this.subjects=subjects;
              }
        );


        this.userService.getTeacher()
        .subscribe(
              users => {
                this.users=users;
              }
        );
  }

    loadTopics(val){
          let obj = {'subject_id':val};
          this.pollService.getTopics(obj)
          .subscribe(topics=>{
            this.topics=topics;
          });
  }

  updateTopicData(data:any,e:Event){
    e.preventDefault();
    this.topicService.updateTopic(data)
    .subscribe(
      result => {
          if (result === true) {
              // login successful
              this.router.navigate(['/receptionist-dash/checkTopicUpdate']);
          } else {
              // login failed
      }}
    );
  }

}
