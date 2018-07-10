import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  private apiUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/comment/'
  private apiCommentPost = 'http://practicaasw-hackernews.herokuapp.com/api/v1/comment/'

  error_message: string = "";

  comment: CommentInfo[];
  public reply_text: string = "";

  constructor(private http: Http, private _router: Router, private globals: Globals, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (window.localStorage.length > 0) {
        this.globals.user_name = localStorage.getItem("name"),
        this.globals.api_key = localStorage.getItem("api_key")
        this.globals.user_id = localStorage.getItem("id")
        this.globals.karma = localStorage.getItem("karma")
      }
      this.getComment(params['id']);
    });
  }

  ngOnInit() {
  }

  getComment(comment_id: string) {
    this.http.get(this.apiUrl + comment_id).subscribe(result => {
      this.comment = result.json().data as CommentInfo[];
    }, error => console.error(error))
  }

  replyButtonPressed(comment_id: string, submission_id: string) {
      console.log("Comment pressed");
      let newReply = new CommentPost();
      newReply.content = this.reply_text;
      let headers = new Headers();
      headers.append('Authorization', this.globals.api_key);

      const req = this.http.post(this.apiCommentPost + comment_id + "/reply", newReply, {headers})
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

class CommentPost {
  content: string;
}

interface CommentInfo {
  id: number;
  content: string;
  user_id: number;
  created_at: string;
  updated_at: number;
  submission_id: number;
  user_name: number;
  submission_title: string;
}
