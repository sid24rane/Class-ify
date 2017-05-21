import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../../ui-init.service';
import { ScheduleService } from '../../services/schedule.service';
import { Router } from '@angular/router';
import { Schedule } from '../../models/schedule';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css'],
  providers:[ UiInitService,ScheduleService]

})
export class ViewScheduleComponent implements OnInit {

  schedules: Schedule[] = [];
    constructor(private UiInitService:UiInitService,
      private router: Router,
          private scheduleService: ScheduleService) { }

    ngOnInit() {
        this.UiInitService.setup();
        this.scheduleService.getSchedule()
        .subscribe(schedules => {
            this.schedules = schedules;
        });
    }

}
