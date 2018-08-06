import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../show-posts/show-posts.reducer';

@Injectable()
export class HttpService {

  public BASE_URL = environment.baseURL;

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<Posts> {
    return this.http.get<Posts>(`${this.BASE_URL}/posts/getPosts`);
  }

}
