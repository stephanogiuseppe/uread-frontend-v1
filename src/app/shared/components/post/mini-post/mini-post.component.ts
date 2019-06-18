import { Component, OnInit, Input } from '@angular/core';

import { Post } from './../../../../shared/models/Post.model';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-mini-post',
  templateUrl: './mini-posts.component.html',
  styleUrls: ['./mini-posts.component.scss']
})
export class MiniPostComponent implements OnInit {
  @Input() public post: Post;
  public IMG_SRC = `${environment.api.baseUrl}/files/`;

  constructor() {}

  public ngOnInit(): void {}
}
