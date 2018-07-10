import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms'



import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SubmissionComponent } from './submission/submission.component';
import { AppRoutingModule } from './/app-routing.module';
import { SubmitComponent } from './submit/submit.component';
import { SubmissionShowComponent } from './submission-show/submission-show.component';
import { ThreadsComponent } from './threads/threads.component';
import { Globals } from 'src/app/globals';
import { ReplyComponent } from './reply/reply.component';
import { CommentComponent } from './comment/comment.component';
//import { submission_userDataService } from 'src/app/services/submission_user';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SubmissionComponent,
    SubmitComponent,
    SubmissionShowComponent,
    ThreadsComponent,
    ReplyComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppComponent, Globals/*, submission_userDataService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
