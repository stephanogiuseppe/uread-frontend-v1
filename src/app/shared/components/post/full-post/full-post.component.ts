import { Component, OnInit, Input } from '@angular/core';

import { Post } from './../../../../shared/models/Post.model';
import { environment } from 'src/environments/environment.prod';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-posts.component.html',
  styleUrls: ['./full-posts.component.scss']
})
export class FullPostComponent implements OnInit {
  @Input() public postId: string;
  public IMG_SRC = `${environment.api.baseUrl}/files/`;
  public post: Post;

  constructor(private postService: PostsService) {
    this.getPost();
  }

  public ngOnInit(): void {}

  private getPost(): void {
    this.postService
      .getPostById(this.postId)
      .subscribe(post => (this.post = post));
  }
}
