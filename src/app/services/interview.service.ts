import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class InterviewService {
  constructor(private http: HttpClient) { }


  getUserData(username: string) {

    const options = username ? { params: new HttpParams().set('username', username) } : {};

    return this.http.get('https://customserverlessfunctions.intelliticks.now.sh/api/interview-data', options)
  }

}