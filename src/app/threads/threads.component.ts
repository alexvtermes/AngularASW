import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Globals } from 'src/app/globals';


@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  private apiUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/user/';
  threads: ThreadsInfo[];

  constructor(private http: Http, private globals: Globals) {
    if (window.localStorage.length > 0) {
      this.globals.user_name = localStorage.getItem("name"),
      this.globals.api_key = localStorage.getItem("api_key")
      this.globals.user_id = localStorage.getItem("id")
      this.globals.karma = localStorage.getItem("karma")
    }
    this.getThreads();
  }

  ngOnInit() {
  }

  getThreads() {
    this.http.get(this.apiUrl + this.globals.user_id + "/comments").subscribe(result => {
      this.threads = result.json().data as ThreadsInfo[];
    }, error => console.error(error))
  }

}

interface ThreadsInfo {
  id: number;
  content: string;
  user_id: string;
  created_at: string;
  updated_at: number;
  submission_id: number;
  user_name: string;
  votes: number;
  submission_title: string;
}
