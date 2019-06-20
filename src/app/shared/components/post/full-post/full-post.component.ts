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
  @Input() public post: Post;
  public IMG_SRC = `${environment.api.baseUrl}/files/`;

  constructor() {}

  public ngOnInit(): void {}
}
