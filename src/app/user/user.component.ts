import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {ActivatedRoute} from "@angular/router";
import { Globals } from 'src/app/globals';

declare var gapi: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private apiUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/users/'
  private apiUrlId = 'http://practicaasw-hackernews.herokuapp.com/api/v1/userid'
  private loginUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/user/signin'


  public user_about: string = "";

  user: UserInfo;
  info: Info;
  userCanUpdate: Boolean = false;

  constructor (private http: Http, private route: ActivatedRoute, private globals: Globals) {
     if (window.localStorage.length > 0) {
       this.globals.user_name = localStorage.getItem("name"),
       this.globals.api_key = localStorage.getItem("api_key")
       this.globals.user_id = localStorage.getItem("id")
       this.globals.karma = localStorage.getItem("karma")
     }
     this.route.params.subscribe(params => {
       this.getUser(params['id']);
       this.userCanUpdate = params['id'] == this.globals.user_id;
     });
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

  getUser(user_id: string) {
    this.http.get(this.apiUrl + user_id).subscribe(result => {
      this.user = result.json().data as UserInfo;
      this.user_about = this.user.about;
    }, error => console.error(error))
  }

  updateButtonPressed() {
    let userUpdate = new UserUpdatePost();
    userUpdate.about = this.user_about;

    let headers = new Headers();
    headers.append('Authorization', this.globals.api_key);
    const req = this.http.put(this.apiUrl + this.globals.user_id + "/update", userUpdate, {headers})
      .subscribe(
        res => {
          console.log(res);
          window.location.reload(true);
        },
        err => {
          console.log(err);
        }
      );
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

interface UserInfo {
  name: string;
  email: string;
  about: string;
  karma: number;
  created_at: string;
}

class UserUpdatePost {
  about: string;
}
