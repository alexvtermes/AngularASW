import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import { Globals } from 'src/app/globals';

declare var gapi: any;

@Component({
  selector: 'app-submission-show',
  templateUrl: './submission-show.component.html',
  styleUrls: ['./submission-show.component.css']
})
export class SubmissionShowComponent implements OnInit {

  private apiUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/submissions/'
  private apiUrlCommentsSubmission = 'http://practicaasw-hackernews.herokuapp.com/api/v1/submission/'
  private apiUrlComments= 'http://practicaasw-hackernews.herokuapp.com/api/v1/comments/'
  private apiUrlReplies= 'http://practicaasw-hackernews.herokuapp.com/api/v1/replies/'
  private loginUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/user/signin'
  public textarea_comment: string = "";

  submission: Submission;
  comments: Comments[];
  info: Info;
  error_message: string = "";

  constructor(private http: Http, private route: ActivatedRoute, private globals: Globals) {
    this.route.params.subscribe(params => this.getSubmission(params['id']));
    this.route.params.subscribe(params => this.getComments(params['id']));
    if (window.localStorage.length > 0) {
      this.globals.user_name = localStorage.getItem("name"),
      this.globals.api_key = localStorage.getItem("api_key")
      this.globals.user_id = localStorage.getItem("id")
      this.globals.karma = localStorage.getItem("karma")
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
        if (window.localStorage.length === 0)this.googleInit();
  }

  public auth2: any;
  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '323632880151-021adosf6m80llcieeba79e4cjvf6kp6.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        let tokenGoogle = new Login();
        tokenGoogle.token = googleUser.getAuthResponse().id_token;
        const req = this.http.post(this.loginUrl, tokenGoogle)
          .subscribe(
            res => {
              this.info = res.json().data as Info;
              console.log(this.info);
              localStorage.setItem("name", this.info['name']);
              localStorage.setItem("api_key", this.info['api_key']);
              localStorage.setItem("id", this.info['id'].toString());
              localStorage.setItem("karma", this.info['karma'].toString())
              window.location.reload();
            },
            err => {
              console.log(err);
            }
          );

      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  logout() {
    this.globals.api_key = '';
    this.globals.user_id = '';
    this.globals.user_name = '';
    this.globals.karma = '';
    localStorage.clear();
    window.open("https://mail.google.com/mail/u/0/?logout&hl=en");
    window.location.reload();
  }

  getSubmission(submission_id: string) {
    console.log(submission_id)
    this.http.get(this.apiUrl + submission_id).subscribe(result => {
      this.submission = result.json().data as Submission;
      this.submission = this.submission[0];
    }, error => console.error(error))
  }

  getComments(submission_id: string) {
    console.log(submission_id)
    this.http.get(this.apiUrlCommentsSubmission + submission_id + "/comments_replies").subscribe(result => {
      this.comments = result.json().data as Comments[];
    }, error => console.error(error))
  }

  doVoteSubmission(submission_id: string) {
    let headers = new Headers();
    headers.append('Authorization', this.globals.api_key);
    const req = this.http.put(this.apiUrl + "/" + submission_id + "/vote", {}, {headers})
      .subscribe(
        res => {
          this.error_message = "";
          window.location.reload();
        },
        err => {
          switch(err.status) {
            case 403:
              this.error_message = "Error in authenticity.";
              break;
            case 404:
              this.error_message = "Submission does not exist.";
              break;
            case 422:
              this.error_message = "User has not voted previously or User cannot vote own submissions.";
              break;
            default:
              this.error_message = "Error."
              break;
          }
        }
      );
  }

  doUnvoteSubmission(submission_id: string) {
    let headers = new Headers();
    headers.append('Authorization', this.globals.api_key);
    const req = this.http.put(this.apiUrl + "/" + submission_id + "/unvote", {}, {headers})
      .subscribe(
        res => {
          this.error_message = "";
          window.location.reload();
        },
        err => {
          switch(err.status) {
            case 403:
              this.error_message = "Error in authenticity.";
              break;
            case 422:
              this.error_message = "User has not voted previously or User cannot unvote own submissions.";
              break;
            default:
              this.error_message = "Error."
              break;
          }
        }
      );
  }

  doVoteComment(comment_id) {
    let headers = new Headers();
    headers.append('Authorization', this.globals.api_key);
    const req = this.http.put(this.apiUrlComments + comment_id + "/vote", {}, {headers})
      .subscribe(
        res => {
          this.error_message = "";
          window.location.reload(true);
        },
        err => {
          switch(err.status) {
            case 403:
              this.error_message = "Error in authenticity.";
              break;
            case 422:
              this.error_message = "User has voted previously or User cannot vote own comments.";
              break;
            default:
            this.error_message = "Error";
          }
        }
      );
  }

  doUnvoteComment(comment_id) {
    let headers = new Headers();
    headers.append('Authorization', this.globals.api_key);
    const req = this.http.put(this.apiUrlComments + comment_id + "/unvote", {}, {headers})
      .subscribe(
        res => {
          this.error_message = "";
          window.location.reload(true);
        },
        err => {
          switch(err.status) {
            case 403:
              this.error_message = "Error in authenticity.";
              break;
            case 422:
              this.error_message = "User has not voted previously or User cannot unvote own comments.";
              break;
            default:
              this.error_message = "Error."
              break;
          }
        }
      );
  }

  doComment() {
    let commentPost = new CommentPost();
    commentPost.content = this.textarea_comment;
    console.log(this.submission.id)
    let headers = new Headers();
    headers.append('Authorization', this.globals.api_key);
    const req = this.http.post(this.apiUrlCommentsSubmission + this.submission.id + "/comment", commentPost, {headers})
      .subscribe(
        res => {
          this.error_message = "";
          window.location.reload(true);
        },
        err => {
          switch(err.status) {
            case 403:
              this.error_message = "Error in authenticity.";
              break;
            case 404:
              this.error_message = "Submission does not exist.";
              break;
            case 422:
              this.error_message = "Internal error.";
              break;
          }
        }
      );
  }

  doVoteReply(reply_id) {
    let headers = new Headers();
    headers.append('Authorization', this.globals.api_key);
    const req = this.http.put(this.apiUrlReplies + reply_id + "/vote", {}, {headers})
      .subscribe(
        res => {
          this.error_message = "";
          window.location.reload(true);
        },
        err => {
          switch(err.status) {
            case 403:
              this.error_message = "Error in authenticity.";
              break;
            case 422:
              this.error_message = "User has voted previously or User cannot vote own comments.";
              break;
            default:
            this.error_message = "Error";
          }
        }
      );
  }

  doUnvoteReply(reply_id) {
    let headers = new Headers();
    headers.append('Authorization', this.globals.api_key);
    const req = this.http.put(this.apiUrlReplies + reply_id + "/unvote", {}, {headers})
      .subscribe(
        res => {
          console.log(res);
          this.error_message = "";
          window.location.reload(true);
        },
        err => {
          switch(err.status) {
            case 403:
              this.error_message = "Error in authenticity.";
              break;
            case 422:
              this.error_message = "User has not voted previously or User cannot unvote own comments.";
              break;
            default:
              this.error_message = "Error."
              break;
          }
        }
      );
  }

}

class Reply {
  id: number;
  content: string;
  user_id: number;
  user_name: string;
  comment_id: number;
  created_at: string;
  updated_at: string;
  reply_parent_id: number;
  submission_id: number;
  cached_votes_total: number;
  replies: Reply[];
}

interface Comments {
  id: number;
  content: string;
  user_id: number;
  user_name: string;
  submission_id: number;
  created_at: string;
  updated_at: string;
  votes: number;
}

interface Info {
  api_key: string;
  user_id: number;
  user_name: string;
  karma: number;
}

class Login {
  token: string;
}

class CommentPost {
  content: string;
}

interface Submission {
  id: number;
  created_at: string;
  user_creator_id: number;
  title: string;
  url: string;
  text: string;
  user_name: string;
  comments: number;
  votes: number;
}
