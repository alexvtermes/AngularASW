import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Globals } from 'src/app/globals';



@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  private apiUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/submissions'

  public submit_title: string = "";
  public submit_url: string = "";
  public submit_text: string = "";

  error_message: string = "";

  constructor(private http: Http, public router: Router, private globals: Globals) {
    if (window.localStorage.length > 0) {
      this.globals.user_name = localStorage.getItem("name"),
      this.globals.api_key = localStorage.getItem("api_key")
      this.globals.user_id = localStorage.getItem("id")
      this.globals.karma = localStorage.getItem("karma")
    }
   }

  ngOnInit() {
  }

  submitButtonPressed() {
    let submit = new SubmitPost();
    submit.title = this.submit_title;
    submit.url = this.submit_url;
    submit.text = this.submit_text;

    let headers = new Headers();
    headers.append('Authorization', this.globals.api_key);
    const req = this.http.post(this.apiUrl, submit, {headers})
      .subscribe(
        res => {
          this.error_message = "";
          this.router.navigate(['newest']);
        },
        err => {
          switch(err.status) {
          case 403:
            this.error_message = "You must login first";
            break;

          case 417:
            this.error_message = "You must write a title and an url or a text";
            break;

          case 422:
            this.error_message = "A submission with same url already exists";
            break;

          case 500:
            this.error_message = "Error in data base";
            break;
        }
      }
      );
  }

}

class SubmitPost {
  title: string;
  url: string;
  text: string;
}
