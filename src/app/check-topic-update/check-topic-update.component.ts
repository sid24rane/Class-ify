import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { TopicService } from '../services/topic.service';
import { Router } from '@angular/router';
import { Topic } from '../models/topic';

@Component({
  selector: 'app-check-topic-update',
  templateUrl: './check-topic-update.component.html',
  styleUrls: ['./check-topic-update.component.css'],
  providers:[TopicService]
})

export class CheckTopicUpdateComponent implements OnInit {

topics : Topic[] =[];

  constructor(private http:Http,private router: Router,
        private topicService: TopicService) { }

  ngOnInit() {
      this.topicService.getUpdatedTopic()
      .subscribe(
        topics => {
          this.topics=topics;
        }
      );
  }

}
