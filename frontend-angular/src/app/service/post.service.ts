import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../post/post.dto';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postUrl: string;

  constructor(private readonly http: HttpClient) {
    this.postUrl = environment.api.baseUrl + environment.api.postApi;
  }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.postUrl);
  }

}
