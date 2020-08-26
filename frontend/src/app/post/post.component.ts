import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from './post.dto';
import { Subscription } from 'rxjs';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  posts: Array<Post> = [];

  @ViewChild(CommentComponent) child: CommentComponent;

  private postSubscription: Subscription;

  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
    this.postSubscription = this.postService.getPosts().subscribe(data => {
      if (Array.isArray(data) && data.length > 0) {
        this.posts = data;
      } else {
        this.posts = [];
      }
    });
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

  loadComments(post: Post): void {
    this.child.loadComments(post);
  }

}
