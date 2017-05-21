import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../../ui-init.service';

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.css','../../../css/animate.css','../../../css/style.css',
  '../../../font-awesome/css/font-awesome.css',
  '../../../css/bootstrap.min.css'],
  providers:[UiInitService]
})
export class StudentReportComponent implements OnInit {

    constructor(private UiInitService:UiInitService) { }

    ngOnInit() {
        this.UiInitService.setup();
    }


}
