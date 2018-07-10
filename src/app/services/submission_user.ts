import {Injectable} from '@angular/core';

@Injectable()
export class submission_userDataService {
  user_id: any;
  getUserID() {
    return this.user_id;
  }

  setUserID(id: any) {
    this.user_id = id
  }
}
