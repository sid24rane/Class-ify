import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../services/notice.service';
import { Router } from '@angular/router';
import { Notice } from '../../models/notice';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css','../../../css/bootstrap.min.css','../../../font-awesome/css/font-awesome.css',
'../../../css/plugins/iCheck/custom.css','../../../css/animate.css','../../../css/style.css'],
providers:[NoticeService]
})

export class NoticeComponent implements OnInit {

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
                  // login successful
                  this.router.navigate(['/receptionist-dash/notice']);
              } else {
                  // login failed
          }}
        );

      }

}
