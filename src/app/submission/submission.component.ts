import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Globals } from 'src/app/globals';

declare var gapi: any;

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit, AfterViewInit {

  private apiUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/submissions'
  private loginUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/user/signin'

  submissions: SubmissionInfo[];
  router: Router;
  info: Info;
  error_message: string = "";

  constructor (private http: Http, private _router: Router, private globals: Globals) {
	   console.log('Constructor');
     this.router = _router;
     if (window.localStorage.length > 0) {
       this.globals.user_name = localStorage.getItem("name"),
       this.globals.api_key = localStorage.getItem("api_key")
       this.globals.user_id = localStorage.getItem("id")
       this.globals.karma = localStorage.getItem("karma")
       console.log("1");
     }
     if (this.router.url == '/submissions') {
       this.getSubmissionsUrl();
     }
     else if (this.router.url == '/newest'){
       this.getAllSubmissions();
     }
     else if (this.router.url == '/ask') {
       this.getSubmissionsAsk();
     }
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
        if (window.localStorage.length == 0)this.googleInit();
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
        console.log("3");
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

  getSubmissionsUrl() {
    this.http.get(this.apiUrl + "/url").subscribe(result => {
      this.submissions = result.json().data as SubmissionInfo[];
    }, error => console.error(error))
  }

  getAllSubmissions() {
    this.http.get(this.apiUrl).subscribe(result => {
      this.submissions = result.json().data as SubmissionInfo[];
    }, error => console.error(error))
  }

  getSubmissionsAsk() {
    this.http.get(this.apiUrl + "/ask").subscribe(result => {
      this.submissions = result.json().data as SubmissionInfo[];
    }, error => console.error(error))
  }

  doVote(submission_id: string) {
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
              this.error_message = "User has voted previously.";
              break;
          }
        }
      );
  }

  doUnvote(submission_id: string) {
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
              this.error_message = "User has not voted previously or User cannot unvote its own submission";
              break;
            default:
              this.error_message = "Error"
              break;
          }
        }
      );
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

}

class Login {
  token: string;
}

interface Info {
  api_key: string;
  user_id: number;
  user_name: string;
  karma: number;
}

interface SubmissionInfo {
  id: number;
  title: string;
  url: string;
  text: string;
  user_creator_id: number;
  user_name: string;
  comments: number;
  created_at: string;
  votes: number;
}
