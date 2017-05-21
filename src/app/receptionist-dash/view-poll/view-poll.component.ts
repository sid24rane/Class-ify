import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PollService } from '../../services/poll.service';
import { Poll } from '../../models/poll';

@Component({
  selector: 'app-view-poll',
  templateUrl: './view-poll.component.html',
  styleUrls: ['./view-poll.component.css'],
  providers:[PollService]
})

export class ViewPollComponent implements OnInit {

  polls:Poll[] =[];
    constructor(private http:Http,
    private pollService:PollService) { }

    ngOnInit() {
      this.pollService.getPoll()
      .subscribe(polls => {
          this.polls = polls;
      });
    }



}
