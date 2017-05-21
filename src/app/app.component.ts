import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { TeacherDashComponent } from "./teacher-dash/teacher-dash.component";
import { StudentDashComponent } from "./student-dash/student-dash.component";
import { DirectorDashComponent } from "./director-dash/director-dash.component";
import { ReceptionistDashComponent } from "./receptionist-dash/receptionist-dash.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app component works!';
}