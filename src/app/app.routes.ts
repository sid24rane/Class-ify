import { RouterModule,Routes } from "@angular/router";
import { ModuleWithProviders }  from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { StudentDashComponent } from "./student-dash/student-dash.component";
import { LoginComponent } from "./login/login.component";
import { ForgotPassComponent } from "./forgot-pass/forgot-pass.component";
import { ReceptionistDashComponent } from "./receptionist-dash/receptionist-dash.component";
import { DirectorDashComponent } from "./director-dash/director-dash.component";
import { TeacherDashComponent } from "./teacher-dash/teacher-dash.component";
import { NoticeComponent } from './receptionist-dash/notice/notice.component';
import { SharenotesComponent } from './teacher-dash/sharenotes/sharenotes.component';
import { ContactTeacherComponent } from './teacher-dash/contact-teacher/contact-teacher.component';
import { ContactStudentComponent } from './student-dash/contact-student/contact-student.component';
import { ContactReceptionistComponent } from './receptionist-dash/contact-receptionist/contact-receptionist.component';
import { ContactDirectorComponent } from './director-dash/contact-director/contact-director.component';
import { TodoComponent } from './student-dash/todo/todo.component';
import { UpdateTopicComponent } from './receptionist-dash/update-topic/update-topic.component';
import { StudentVerifyComponent } from './receptionist-dash/student-verify/student-verify.component';
import { RevisionPollComponent } from './receptionist-dash/revision-poll/revision-poll.component';
import { NewTestComponent } from './receptionist-dash/new-test/new-test.component';
import { PersonalNotesComponent } from './student-dash/personal-notes/personal-notes.component';
import { PerformanceBargraphComponent } from './student-dash/performance-bargraph/performance-bargraph.component';
import { CreateStudyplannerComponent } from './student-dash/create-studyplanner/create-studyplanner.component';
import { ViewStudyplannerComponent } from './student-dash/view-studyplanner/view-studyplanner.component';
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
import {AuthGuard} from './auth-guard/auth-guard.service';
import {DirectorAuthGuard} from './auth-guard/director-auth-guard.service';
import {TeacherAuthGuard} from './auth-guard/teacher-auth-guard.service';
import {ReceptionistAuthGuard} from './auth-guard/receptionist-auth-guard.service';

const APP_ROUTES = [
  { path:'', component: HomeComponent },

  { path:'register', component: RegisterComponent },

  { path:'login', component: LoginComponent },

  { path:'forgot-password', component: ForgotPassComponent },

  { path:'student-dash', component: StudentDashComponent ,
  children: [
    { path: '', redirectTo: 'receptionist-dash', pathMatch: 'full'},
    { path: 'contactStudent', component: ContactStudentComponent },
    { path: 'contactReceptionist', component: ContactReceptionistComponent },
    { path: 'toDo', component: TodoComponent },
    { path: 'personalNotes', component: PersonalNotesComponent },
    { path: 'performanceBargraph', component: PerformanceBargraphComponent },
    { path: 'viewStudyPlanner', component: ViewStudyplannerComponent },
    { path: 'createStudyPlanner', component: CreateStudyplannerComponent },
    { path: 'dailySchedule', component: DailyScheduleComponent },
    { path: 'myTestSchedule', component: MyTestScheduleComponent },
    { path: 'suggestions', component: SuggestionsComponent },
    { path: 'sharedFiles', component: SharedFilesComponent },
    { path: 'notices', component: NoticesComponent },
    { path: 'rateFaculty', component: RateFacultyComponent },
    { path: 'discussion', component: DiscussionComponent }



            ],
            canActivate: [AuthGuard]
  },


  { path:'receptionist-dash', component: ReceptionistDashComponent,
        children: [
          { path: '', redirectTo: 'receptionist-dash', pathMatch: 'full'},
          { path: 'addNotice', component: NoticeComponent },
        { path: 'contactStudent', component: ContactStudentComponent },
        { path: 'contactFaculty', component: ContactTeacherComponent },
        { path: 'revisionPoll', component: RevisionPollComponent },
        { path: 'verifyStudent', component: StudentVerifyComponent },
        { path: 'createTest', component: NewTestComponent },
      { path: 'updateTopic', component: UpdateTopicComponent },
      { path: 'updateLectures', component: UpdateLectureComponent },
      { path: 'notices', component: NoticesComponent },
      { path: 'checkTopicUpdate', component: CheckTopicUpdateComponent },
      { path: 'updateTestMarks', component: UpdateTestMarksComponent },
      { path: 'viewPolls', component: ViewPollComponent },
      { path: 'discussion', component: DiscussionComponent }

],
            canActivate: [ReceptionistAuthGuard]
  },

  { path:'director-dash', component: DirectorDashComponent ,
  children: [
    { path: '', redirectTo: 'teacher-dash', pathMatch: 'full'},
    { path: 'contactStudent', component: ContactStudentComponent },
    { path: 'contactFaculty', component: ContactTeacherComponent },
    { path: 'contactReceptionist', component: ContactReceptionistComponent },
    { path: 'createFacultyRating', component: CreateFacultyRatingComponent },
    { path: 'checkFacultyRating', component: CheckFacultyRatingComponent },
    { path: 'addNotice', component: AddNoticeComponent },
    { path: 'testSchedule', component: TestScheduleComponent },
    { path: 'verification', component: TeacherVerificationComponent },
    { path: 'testReports', component: TestReportsComponent },
    { path: 'notices', component: NoticesComponent },
    { path: 'checkTopicUpdate', component: CheckTopicUpdateComponent },
    { path: 'viewSchedule', component: ViewScheduleComponent },
    { path: 'discussion', component: DiscussionComponent }
  ],
              canActivate: [DirectorAuthGuard]
},

  { path:'teacher-dash', component: TeacherDashComponent,
    children: [
    { path: '', redirectTo: 'teacher-dash', pathMatch: 'full'},
    { path: 'shareNotes', component: SharenotesComponent },
    { path: 'contactTeacher', component: ContactTeacherComponent },
    { path: 'contactStudent', component: ContactStudentComponent },
    { path: 'giveSuggestion', component: GiveSuggestionComponent },
    { path: 'schedule', component: TeacherScheduleComponent },
    { path: 'studentReport', component: StudentReportComponent },
    { path: 'notices', component: NoticesComponent },
    { path: 'discussion', component: DiscussionComponent }
],
            canActivate: [TeacherAuthGuard]
   }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
