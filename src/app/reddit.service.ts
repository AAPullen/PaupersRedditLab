import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FullResult } from './full-result';


@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }

  // We need the URL to the API
  private url: string = 'https://www.reddit.com/r/aww/.json';

  // Then, we need to make some HTTP web requests 
  // (we will use the HttpClientModule. *NOTE: See app.module.ts)

  getPosts(): Observable<FullResult> {
    return this.http.get<FullResult>(this.url);
  }


}
