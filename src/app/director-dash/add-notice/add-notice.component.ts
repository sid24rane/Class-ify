import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../services/notice.service';
import { Router } from '@angular/router';
import { Notice } from '../../models/notice';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.css'],
  providers:[NoticeService]
})

export class AddNoticeComponent implements OnInit {

  constructor(private router: Router,
      private noticeService: NoticeService) { }

      ngOnInit() {

      }

      addNoticeData(data:any,e:Event){
        e.preventDefault();
        this.noticeService.addNotice(data)
        .subscribe(
          result => {
              if (result === true) {
                  // notices add
                  this.router.navigate(['/director-dash/notice']);
              } else {
                  // notice not added
          }}
        );

      }

}
