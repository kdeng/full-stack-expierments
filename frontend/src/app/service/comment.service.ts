import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Comment } from '../comment/comment.dto';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl: string;
  private commentApi: string;
  constructor(private readonly http: HttpClient) {
    this.baseUrl = environment.api.baseUrl + environment.api.postApi;
    this.commentApi = environment.api.commentsApi;
  }

  async getCommentsByPostId(postId: number): Promise<Array<Comment>> {
    return this.http.get<Array<Comment>>(`${this.baseUrl}/${postId}${this.commentApi}`).toPromise();
  }

}
