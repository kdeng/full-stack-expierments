import { Comment } from '../comment/comment.dto';

export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  commentsLoaded = false;
  comments: Array<Comment> = [];
}
