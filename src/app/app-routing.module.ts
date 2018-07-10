import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent }      from './user/user.component';
import { SubmissionComponent } from './submission/submission.component';
import { SubmitComponent } from './submit/submit.component';
import { SubmissionShowComponent } from './submission-show/submission-show.component';
import { ThreadsComponent } from './threads/threads.component';
import { ReplyComponent } from './reply/reply.component';
import { CommentComponent } from './comment/comment.component';


const routes: Routes = [
  { path: '', redirectTo: 'submissions', pathMatch: 'full'},
  { path: 'user/:id', component: UserComponent },
  { path: 'submissions', component: SubmissionComponent },
  { path: 'newest', component: SubmissionComponent },
  { path: 'ask', component: SubmissionComponent},
  { path: 'submit', component: SubmitComponent},
  { path: 'submission/:id', component: SubmissionShowComponent},
  { path: 'threads', component: ThreadsComponent},
  { path: 'reply/:id', component: ReplyComponent},
  { path: 'comment/:id', component: CommentComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
