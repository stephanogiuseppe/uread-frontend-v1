import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

import { PostsService } from 'src/app/shared/services/posts.service';
import { Post } from 'src/app/shared/models/Post.model';
import { Column } from 'src/app/shared/models/Column.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public columns: Array<Column>;
  public searchForm: FormGroup;
  public posts: Array<Post>;

  constructor(
    private translate: TranslateService,
    private postsService: PostsService
  ) {
    translate.setDefaultLang('pt-br');
    translate.use('pt-br');
  }

  public ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchFormControl: new FormControl(null)
    });
    this.postsService.getPosts().subscribe(posts => (this.posts = posts));
  }

  public onSubmit(): void {
    this.postsService
      .getPostsByName(this.searchForm.controls.searchFormControl.value)
      .subscribe(posts => (this.posts = posts));
  }
}
