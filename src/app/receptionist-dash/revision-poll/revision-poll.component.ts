import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';
import { Router } from '@angular/router';
import { Poll } from '../../models/poll';
import {Subject} from '../../models/subject';
import {Topic} from '../../models/subtopics';

@Component({
  selector: 'app-revision-poll',
  templateUrl: './revision-poll.component.html',
  styleUrls: ['./revision-poll.component.css'],
  providers:[PollService]
})
export class RevisionPollComponent implements OnInit {

   subjects : Subject[] =[];
   topics : Topic[] =[];

  constructor(private router: Router,
      private pollService: PollService) { }

      ngOnInit() {
        this.pollService.getSubjects()
        .subscribe(
              subjects => {
                this.subjects=subjects;
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

  revisionPollData(data:any,e:Event){
    e.preventDefault();
    delete data.subject;
    this.pollService.addPoll(data)
    .subscribe(
      result => {
          if (result === true) {
              // login successful
              // VIEW POLLS TO BE CREATED//
              this.router.navigate(['/receptionist-dash/revision-poll']);
          } else {
              // login failed
      }}
    );
    }

}
