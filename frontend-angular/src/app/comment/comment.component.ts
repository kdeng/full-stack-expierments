import { Component, Input } from '@angular/core';
import { Post } from '../post/post.dto';
import { CommentService } from '../service/comment.service';
import { Comment } from './comment.dto';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input()
  post: Post;

  constructor(private readonly commentService: CommentService) { }

  async loadComments(post: Post): Promise<void> {
    if (post && !post.commentsLoaded) {
      try {
        post.comments = (await this.commentService.getCommentsByPostId(post.id)).sort((a: Comment, b: Comment) => (a.id - b.id));
        post.commentsLoaded = true;
      } catch (e) {
        console.error(`Cannot retrieve comments for post '${post.id}'`, e);
      }

    }
  }

}
