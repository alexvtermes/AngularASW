import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  private apiUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/replies/'
  private apiReplyPost = 'http://practicaasw-hackernews.herokuapp.com/api/v1/reply/'

  error_message: string = "";

  reply: ReplyInfo[];
  public reply_text: string = "";

  constructor(private http: Http, private _router: Router, private globals: Globals, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (window.localStorage.length > 0) {
        this.globals.user_name = localStorage.getItem("name"),
        this.globals.api_key = localStorage.getItem("api_key")
        this.globals.user_id = localStorage.getItem("id")
        this.globals.karma = localStorage.getItem("karma")
      }
      this.getReply(params['id']);
    });
  }

  ngOnInit() {
  }

  getReply(reply_id: string) {
    this.http.get(this.apiUrl + reply_id).subscribe(result => {
      this.reply = result.json().data as ReplyInfo[];
      console.log(this.reply[0]);
    }, error => console.error(error))
  }

  replyButtonPressed(reply_id: string, submission_id: string) {
      console.log("Reply pressed");
      let newReply = new ReplyPost();
      newReply.content = this.reply_text;
      let headers = new Headers();
      headers.append('Authorization', this.globals.api_key);

      const req = this.http.post(this.apiReplyPost + reply_id + "/reply", newReply, {headers})
        .subscribe(
          res => {
            this.error_message = "";
            this._router.navigate(['submission/' + submission_id]);
          },
          err => {
            switch(err.status) {
            case 403:
              this.error_message = "You must login first";
              break;

            default:
              this.error_message = "Error";
            }
          }
      );
  }

}

class ReplyPost {
  content: string;
}

interface ReplyInfo {
  id: number;
  content: string;
  user_id: number;
  created_at: string;
  updated_at: number;
  reply_parent_id: number;
  submission_id: number;
  cached_votes_total: number;
  user_name: string;
  submission_title: string;
  comment_id: number;
}
