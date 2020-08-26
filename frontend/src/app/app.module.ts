import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentService } from './service/comment.service';
import { PostService } from './service/post.service';
import { AppMaterialModule } from './app-material-modules';

@NgModule({
  declarations: [
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
  ],
  providers: [
    PostService,
    CommentService,
  ],
  entryComponents: [PostComponent],
  bootstrap: [PostComponent]
})
export class AppModule { }
