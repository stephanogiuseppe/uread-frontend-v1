import { Component, OnInit } from '@angular/core';

import { PostsService } from './../../shared/services/posts.service';
import { Post } from 'src/app/shared/models/Post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts: Array<Post>;

  constructor(private postsService: PostsService) {}

  public ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => (this.posts = posts));
  }
}
