import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard} from './auth-guard/auth-guard.service';
import {DirectorAuthGuard} from './auth-guard/director-auth-guard.service';
import {TeacherAuthGuard} from './auth-guard/teacher-auth-guard.service';
import {ReceptionistAuthGuard} from './auth-guard/receptionist-auth-guard.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { StudentDashComponent } from './student-dash/student-dash.component';
import { DirectorDashComponent } from './director-dash/director-dash.component';
import { ReceptionistDashComponent } from './receptionist-dash/receptionist-dash.component';
import { TeacherDashComponent } from './teacher-dash/teacher-dash.component';
import { NoticeComponent } from './receptionist-dash/notice/notice.component';
import { SharenotesComponent } from './teacher-dash/sharenotes/sharenotes.component';
import { ContactTeacherComponent } from './teacher-dash/contact-teacher/contact-teacher.component';
import { ContactStudentComponent } from './student-dash/contact-student/contact-student.component';
import { ContactDirectorComponent } from './director-dash/contact-director/contact-director.component';
import { ContactReceptionistComponent } from './receptionist-dash/contact-receptionist/contact-receptionist.component';
import { TodoComponent } from './student-dash/todo/todo.component';
import { UpdateTopicComponent } from './receptionist-dash/update-topic/update-topic.component';
import { StudentVerifyComponent } from './receptionist-dash/student-verify/student-verify.component';
import { RevisionPollComponent } from './receptionist-dash/revision-poll/revision-poll.component';
import { NewTestComponent } from './receptionist-dash/new-test/new-test.component';
import { PersonalNotesComponent } from './student-dash/personal-notes/personal-notes.component';
import { PerformanceBargraphComponent } from './student-dash/performance-bargraph/performance-bargraph.component';
import { ViewStudyplannerComponent } from './student-dash/view-studyplanner/view-studyplanner.component';
import { CreateStudyplannerComponent } from './student-dash/create-studyplanner/create-studyplanner.component';
import { DailyScheduleComponent } from './student-dash/daily-schedule/daily-schedule.component';
import { AddNoticeComponent } from './director-dash/add-notice/add-notice.component';
import { TestScheduleComponent } from './director-dash/test-schedule/test-schedule.component';
import { GiveSuggestionComponent } from './teacher-dash/give-suggestion/give-suggestion.component';
import { TeacherScheduleComponent } from './teacher-dash/teacher-schedule/teacher-schedule.component';
import { StudentReportComponent } from './teacher-dash/student-report/student-report.component';
import { TeacherVerificationComponent } from './director-dash/teacher-verification/teacher-verification.component';
import { TestReportsComponent } from './director-dash/test-reports/test-reports.component';
import { MyTestScheduleComponent } from './student-dash/my-test-schedule/my-test-schedule.component';
import { SuggestionsComponent } from './student-dash/suggestions/suggestions.component';
import { UpdateLectureComponent } from './receptionist-dash/update-lecture/update-lecture.component';
import { SharedFilesComponent } from './student-dash/shared-files/shared-files.component';
import { NoticesComponent } from './notices/notices.component';
import { CheckTopicUpdateComponent } from './check-topic-update/check-topic-update.component';
import { CreateFacultyRatingComponent } from './director-dash/create-faculty-rating/create-faculty-rating.component';
import { CheckFacultyRatingComponent } from './director-dash/check-faculty-rating/check-faculty-rating.component';
import { UpdateTestMarksComponent } from './receptionist-dash/update-test-marks/update-test-marks.component';
import { ViewScheduleComponent } from './director-dash/view-schedule/view-schedule.component';
import { ViewPollComponent } from './receptionist-dash/view-poll/view-poll.component';
import { RateFacultyComponent } from './student-dash/rate-faculty/rate-faculty.component';
import { DiscussionComponent } from './discussion/discussion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPassComponent,
    StudentDashComponent,
    DirectorDashComponent,
    ReceptionistDashComponent,
    TeacherDashComponent,
    NoticeComponent,
    SharenotesComponent,
    ContactTeacherComponent,
    ContactStudentComponent,
    ContactDirectorComponent,
    ContactReceptionistComponent,
    TodoComponent,
    UpdateTopicComponent,
    StudentVerifyComponent,
    RevisionPollComponent,
    NewTestComponent,
    PersonalNotesComponent,
    PerformanceBargraphComponent,
    ViewStudyplannerComponent,
    CreateStudyplannerComponent,
    DailyScheduleComponent,
    AddNoticeComponent,
    TestScheduleComponent,
    GiveSuggestionComponent,
    TeacherScheduleComponent,
    StudentReportComponent,
    TeacherVerificationComponent,
    TestReportsComponent,
    TestScheduleComponent,
    MyTestScheduleComponent,
    SuggestionsComponent,
    UpdateLectureComponent,
    SharedFilesComponent,
    NoticesComponent,
    CheckTopicUpdateComponent,
    CreateFacultyRatingComponent,
    CheckFacultyRatingComponent,
    UpdateTestMarksComponent,
    ViewScheduleComponent,
    ViewPollComponent,
    RateFacultyComponent,
    DiscussionComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ AuthGuard,
    DirectorAuthGuard,
    ReceptionistAuthGuard,
    TeacherAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
