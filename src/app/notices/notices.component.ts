import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../services/notice.service';
import { Router } from '@angular/router';
import { Notice } from '../models/notice';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css'],
  providers:[NoticeService]
  
})
export class NoticesComponent implements OnInit {
 notices : Notice[] =[];

constructor(private router: Router,
    private noticeService: NoticeService) { }

    ngOnInit() {
           // reset login status
            this.noticeService.getNotice()
            .subscribe(
              notices => {
                this.notices=notices;
              }
            );
      }
}
